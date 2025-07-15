import { useState } from 'react';
import AuthPage from './AuthPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

type AuthView = 'main' | 'register' | 'login';

type AuthContainerProps = {
  onAuthSuccess: () => void;
};

const AuthContainer = ({ onAuthSuccess }: AuthContainerProps) => {
  const [currentView, setCurrentView] = useState<AuthView>('main');

  const handleBack = () => setCurrentView('main');

  if (currentView === 'register') {
    return <RegisterForm onBack={handleBack} onRegister={onAuthSuccess} />;
  }

  if (currentView === 'login') {
    return (
      <LoginForm
        onBack={handleBack}
        onLogin={() => {
          onAuthSuccess();
        }}
      />
    );
  }

  return (
    <AuthPage
      onRegister={() => setCurrentView('register')}
      onLogin={() => setCurrentView('login')}
    />
  );
};

export default AuthContainer;
