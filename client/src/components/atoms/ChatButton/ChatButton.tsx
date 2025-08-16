import { motion } from 'framer-motion';
import robotSvg from '../../../assets/robot.svg';

interface ChatButtonProps {
  onClick: () => void;
}

const RobotIconImg = ({ size = 24 }: { size?: number }) => (
  <img
    src={robotSvg}
    alt="open chat"
    width={size}
    height={size}
    style={{ display: 'block' }}
  />
);

export const ChatButton = ({ onClick }: ChatButtonProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000,
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: -22,
          borderRadius: '50%',
          pointerEvents: 'none',
          background:
            'radial-gradient(closest-side, rgba(255,255,255,0.18), rgba(255,255,255,0.08) 60%, rgba(0,0,0,0) 70%)',
          filter: 'blur(0.5px)',
        }}
        animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.03, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.button
        onClick={onClick}
        style={{
          width: 68,
          height: 68,
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ff7fb3 0%, #f25f81 100%)',
          color: 'white',
          outline: 'none',
          boxShadow:
            '0 10px 24px rgba(242,95,129,0.35), 0 0 28px rgba(242,95,129,0.35)',
        }}
        whileHover={{
          scale: 1.06,
          boxShadow:
            '0 16px 36px rgba(242,95,129,0.45), 0 0 34px rgba(242,95,129,0.45)',
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
        whileTap={{ scale: 1.02, transition: { duration: 0.1 } }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <RobotIconImg size={38} />
      </motion.button>
    </div>
  );
};
