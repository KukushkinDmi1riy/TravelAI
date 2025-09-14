import { Loader, Center, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

type AnimationType = 'fade' | 'pulse' | 'none';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  title?: string;
  subtitle?: string;
  fullScreen?: boolean;
  background?: string;
  animation?: AnimationType;
  duration?: number;
}

export const LoadingSpinner = ({
  size = 'lg',
  color = 'white',
  title = '✈️ TravelPro AI',
  subtitle = 'Загрузка...',
  fullScreen = true,
  background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  animation = 'fade',
  duration = 400,
}: LoadingSpinnerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 50);
    const timer2 = setTimeout(() => setShowContent(true), duration * 0.3);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [duration]);

  const getAnimationStyles = () => {
    const baseTransition = `all ${duration}ms ease-out`;

    switch (animation) {
      case 'fade':
        return {
          container: {
            opacity: isVisible ? 1 : 0,
            transition: baseTransition,
          },
          content: {
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: `${baseTransition} ${duration * 0.1}ms`,
          },
          title: {
            transform: showContent ? 'translateY(0)' : 'translateY(-15px)',
            opacity: showContent ? 1 : 0,
            transition: `${baseTransition} ${duration * 0.2}ms`,
          },
          loader: {
            transform: showContent ? 'scale(1)' : 'scale(0.7)',
            opacity: showContent ? 1 : 0,
            transition: `${baseTransition} ${duration * 0.3}ms`,
          },
          subtitle: {
            transform: showContent ? 'translateY(0)' : 'translateY(15px)',
            opacity: showContent ? 1 : 0,
            transition: `${baseTransition} ${duration * 0.4}ms`,
          },
        };

      case 'pulse':
        return {
          container: {
            opacity: isVisible ? 1 : 0,
            transition: baseTransition,
          },
          content: {
            animation: isVisible
              ? `gentle-pulse ${duration * 2}ms ease-in-out infinite`
              : 'none',
          },
          title: {},
          loader: {},
          subtitle: {},
        };

      default: // 'none'
        return {
          container: {},
          content: {},
          title: {},
          loader: {},
          subtitle: {},
        };
    }
  };

  const animationStyles = getAnimationStyles();

  const containerStyle = {
    ...(fullScreen ? { height: '100vh' } : { padding: '2rem' }),
    background,
    ...animationStyles.container,
  };

  return (
    <>
      <style>
        {`
          @keyframes bounce-in {
            0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
            50% { transform: scale(1.05) rotate(5deg); }
            70% { transform: scale(0.9) rotate(-2deg); }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          
          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes gentle-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.02); }
          }
        `}
      </style>

      <Center style={containerStyle}>
        <Stack align="center" gap="md" style={animationStyles.content}>
          <Text
            size="xl"
            fw={700}
            c={color}
            style={{
              marginBottom: '1rem',
              ...animationStyles.title,
            }}
          >
            {title}
          </Text>

          <div style={animationStyles.loader}>
            <Loader size={size} color={color} />
          </div>

          <Text
            size="sm"
            c="rgba(255, 255, 255, 0.8)"
            style={animationStyles.subtitle}
          >
            {subtitle}
          </Text>
        </Stack>
      </Center>
    </>
  );
};
