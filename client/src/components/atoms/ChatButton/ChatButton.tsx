import { motion } from 'framer-motion';

interface ChatButtonProps {
  onClick: () => void;
}

const RobotIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
    <circle cx="12" cy="5" r="2"></circle>
    <path d="M12 7v4"></path>
    <line x1="8" y1="16" x2="8" y2="16"></line>
    <line x1="16" y1="16" x2="16" y2="16"></line>
  </svg>
);

export const ChatButton = ({ onClick }: ChatButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #e97ac1 0%, #f25f81 100%)',
        color: 'white',
        outline: 'none',
        boxShadow: '0 8px 25px rgba(233, 122, 193, 0.3)',
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: '0 15px 40px rgba(233, 122, 193, 0.5)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{
        scale: 1.02,
        transition: { duration: 0.1 },
      }}
      animate={{
        scale: [1, 1.06, 1],
        boxShadow: [
          '0 8px 25px rgba(233, 122, 193, 0.2)',
          '0 10px 30px rgba(233, 122, 193, 0.5)',
          '0 8px 25px rgba(233, 122, 193, 0.2)',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <RobotIcon />
    </motion.button>
  );
};
