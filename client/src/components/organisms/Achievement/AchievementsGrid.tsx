import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  fetchUserAchievements,
  selectAchievements,
  selectAchievementsLoading,
  selectAchievementsError,
} from '../../../features/achievements/achievementsSlice';
import { selectUser } from '../../../features/auth/authSlice';
import { LoadingSpinner } from '../../molecules/LoadingSpinner/LoadingSpinner';
import { Button } from '../../atoms/Button/Button';
import styles from './AchievementsGrid.module.css';

export const AchievementsGrid = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const achievements = useAppSelector(selectAchievements);
  const loading = useAppSelector(selectAchievementsLoading);
  const error = useAppSelector(selectAchievementsError);

  // Состояние карусели
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
    if (user?.id) {
      dispatch(fetchUserAchievements(user.id));
    }
  }, [dispatch, user?.id]);

  // Автопрокрутка карусели
  useEffect(() => {
    if (!isAutoPlaying || loading || error || achievements.length === 0) return;

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
  }, [isAutoPlaying, totalSlides, loading, error, achievements.length]);

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

  if (loading) {
    return (
      <div className={styles.achievementsWrapper}>
        <div className={styles.achievementsTitle}>Ваши достижения</div>
        <div className={styles.centeredContent}>
          <LoadingSpinner
            size="md"
            title="🏆 Загрузка достижений"
            subtitle="Получаем ваши награды..."
            fullScreen={false}
            background="transparent"
            color="#667eea"
            animation="fade"
            duration={300}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.achievementsWrapper}>
        <div className={styles.achievementsTitle}>
          <span role="img" aria-label="medal">
            🏅
          </span>{' '}
          Ваши достижения
        </div>
        <div className={styles.centeredContent}>
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>⚠️</div>
            <div className={styles.errorText}>Ошибка загрузки достижений</div>
            <div className={styles.errorDetails}>{error}</div>
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                user?.id && dispatch(fetchUserAchievements(user.id))
              }
            >
              Попробовать снова
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Если нет достижений, показываем пустое состояние
  if (achievements.length === 0) {
    return (
      <div className={styles.achievementsWrapper}>
        <div className={styles.achievementsTitle}>
          <span role="img" aria-label="medal">
            🏅
          </span>{' '}
          Ваши достижения
        </div>
        <div className={styles.centeredContent}>
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>📭</div>
            <div className={styles.errorText}>У вас пока нет достижений</div>
            <div className={styles.errorDetails}>
              Выполняйте задания и получайте награды!
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          {infiniteAchievements.map((achievement, idx) => (
            <div
              key={`${achievement.id}-${idx}`}
              className={`${styles.achievement} ${!achievement.unlocked ? styles.locked : ''}`}
            >
              <div className={styles.achievementIcon}>{achievement.icon}</div>
              <div className={styles.achievementTitle}>{achievement.name}</div>
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
