import { useEffect, useState } from 'react';
import { AuthTemplate } from '../../templates';
import { AuthWelcome, LoginForm, RegisterForm } from '../../organisms';
import type { LoginData } from '../../molecules/LoginFields/LoginFields';

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

  const handleLogin = (data: LoginData) => {
    // Здесь будет логика авторизации
    localStorage.setItem('isAuthenticated', 'true');
    console.log('Login data:', data);
    onAuthSuccess();
  };

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
        return <LoginForm onBack={handleBack} onLogin={handleLogin} />;
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
