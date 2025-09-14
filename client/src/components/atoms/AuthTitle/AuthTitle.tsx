import { Title } from '@mantine/core';
import type { TitleProps } from '@mantine/core';

export type AuthTitleProps = TitleProps;

const AuthTitle = ({ style, ...props }: AuthTitleProps) => {
  return (
    <Title
      order={1}
      size="28px"
      ta="center"
      style={{
        ...style,
        // Градиентные стили применяются последними, чтобы не перезаписывались
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
      }}
      {...props}
    />
  );
};

export default AuthTitle;
