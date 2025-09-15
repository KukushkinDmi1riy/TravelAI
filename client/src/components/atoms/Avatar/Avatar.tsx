import { Avatar as MantineAvatar } from '@mantine/core';
import type { AvatarProps as MantineAvatarProps } from '@mantine/core';

interface AvatarProps extends Omit<MantineAvatarProps, 'size'> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  initials?: string;
  className?: string;
}

export const Avatar = ({
  src,
  alt = 'Avatar',
  size = 'md',
  initials,
  className = '',
  ...mantineProps
}: AvatarProps) => {
  // Преобразуем размеры в Mantine формат
  const getMantineSize = () => {
    switch (size) {
      case 'sm':
        return 32;
      case 'md':
        return 48;
      case 'lg':
        return 64;
      case 'xl':
        return 80;
      default:
        return 48;
    }
  };

  return (
    <MantineAvatar
      src={src}
      alt={alt}
      size={getMantineSize()}
      className={className}
      {...mantineProps}
    >
      {initials}
    </MantineAvatar>
  );
};
