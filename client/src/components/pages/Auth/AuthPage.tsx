import { useEffect, useState } from 'react';
import { AuthTemplate } from '../../templates';
import { AuthWelcome, LoginForm, RegisterForm } from '../../organisms';

type AuthView = 'main' | 'register' | 'login';

type AuthPageProps = {
  onAuthSuccess: () => void;
};

const AuthPage = ({ onAuthSuccess }: AuthPageProps) => {
  const [currentView, setCurrentView] = useState<AuthView>('main');

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      onAuthSuccess();
    }
  }, [onAuthSuccess]);

  const handleBack = () => setCurrentView('main');

  const handleRegister = () => {
    // Логика регистрации уже в компоненте RegisterForm
    localStorage.setItem('isAuthenticated', 'true');
    onAuthSuccess();
  };

  const renderContent = () => {
    switch (currentView) {
      case 'register':
        return <RegisterForm onBack={handleBack} onRegister={handleRegister} />;
      case 'login':
        return <LoginForm onBack={handleBack} onLogin={onAuthSuccess} />;
      default:
        return (
          <AuthWelcome
            onRegister={() => setCurrentView('register')}
            onLogin={() => setCurrentView('login')}
          />
        );
    }
  };

  return <AuthTemplate>{renderContent()}</AuthTemplate>;
};

export default AuthPage;
