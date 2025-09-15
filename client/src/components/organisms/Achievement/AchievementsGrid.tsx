import { useState, useRef, useEffect } from 'react';
import styles from './AchievementsGrid.module.css';

const achievements = [
  { icon: '🎯', title: 'Снайпер продаж', unlocked: true },
  { icon: '🚀', title: 'Скоростной турагент', unlocked: true },
  { icon: '🌍', title: 'Знаток Турции', unlocked: true },
  { icon: '🔥', title: '7 дней подряд', unlocked: true },
  { icon: '🎓', title: 'Отличник квизов', unlocked: true },
  { icon: '💎', title: 'Знаток luxury', unlocked: false },
  { icon: '🏆', title: 'Чемпион месяца', unlocked: false },
  { icon: '⭐', title: 'Звезда сервиса', unlocked: true },
  { icon: '🎪', title: 'Мастер презентаций', unlocked: false },
  { icon: '🌴', title: 'Эксперт по пляжному отдыху', unlocked: true },
  { icon: '🏔️', title: 'Горный гид', unlocked: false },
  { icon: '🎨', title: 'Креативный директор', unlocked: true },
];

export const AchievementsGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesPerView = 4; // Количество слайдов на экране
  const totalSlides = achievements.length;

  // Создаем массив с дублированными элементами для бесконечной прокрутки
  const infiniteAchievements = [
    ...achievements,
    ...achievements,
    ...achievements,
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        // Если достигли конца оригинального массива, переходим к началу
        if (nextSlide >= totalSlides) {
          return 0;
        }
        return nextSlide;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Возобновляем автопрокрутку через 5 секунд
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (direction === 'left') {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        // Если достигли конца, переходим к началу
        if (nextSlide >= totalSlides) {
          return 0;
        }
        return nextSlide;
      });
    } else {
      setCurrentSlide((prev) => {
        const prevSlide = prev - 1;
        // Если достигли начала, переходим к концу
        if (prevSlide < 0) {
          return totalSlides - 1;
        }
        return prevSlide;
      });
    }

    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 500);
  };

  // Вычисляем смещение для бесконечной прокрутки
  const getTransformValue = () => {
    const slideWidth = 100 / slidesPerView;
    const offset = currentSlide * slideWidth;
    return `translateX(-${offset}%)`;
  };

  return (
    <div className={styles.achievementsWrapper}>
      <div className={styles.achievementsTitle}>
        <span role="img" aria-label="medal">
          🏅
        </span>{' '}
        Ваши достижения
      </div>

      <div className={styles.carouselContainer}>
        <div
          ref={carouselRef}
          className={styles.carousel}
          style={{
            transform: getTransformValue(),
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {infiniteAchievements.map((ach, idx) => (
            <div
              key={idx}
              className={`${styles.achievement} ${!ach.unlocked ? styles.locked : ''}`}
            >
              <div className={styles.achievementIcon}>{ach.icon}</div>
              <div className={styles.achievementTitle}>{ach.title}</div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
          onClick={() => handleSwipe('right')}
          aria-label="Предыдущий слайд"
          disabled={isTransitioning}
        >
          ‹
        </button>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
          onClick={() => handleSwipe('left')}
          aria-label="Следующий слайд"
          disabled={isTransitioning}
        >
          ›
        </button>
      </div>

      <div className={styles.carouselIndicators}>
        {Array.from(
          { length: Math.ceil(totalSlides / slidesPerView) },
          (_, i) => (
            <button
              key={i}
              className={`${styles.carouselIndicator} ${
                Math.floor(currentSlide / slidesPerView) === i
                  ? styles.carouselIndicatorActive
                  : ''
              }`}
              onClick={() => handleIndicatorClick(i * slidesPerView)}
              aria-label={`Перейти к слайду ${i + 1}`}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default AchievementsGrid;
