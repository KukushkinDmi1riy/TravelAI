import React from 'react';
// import './Icon.module.css';

interface IconProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  children,
  size = 'md',
  color,
  className = '',
}) => {
  const iconClass = `icon icon--${size} ${className}`;
  const style = color ? { color } : {};

  return (
    <span className={iconClass} style={style}>
      {children}
    </span>
  );
};
