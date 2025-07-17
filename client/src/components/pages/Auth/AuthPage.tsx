import { useState } from 'react';
import { AuthTemplate } from '../../templates';
import { AuthWelcome, LoginForm, RegisterForm } from '../../organisms';

type AuthView = 'main' | 'register' | 'login';

const AuthPage = () => {
  const [currentView, setCurrentView] = useState<AuthView>('main');

  const handleBack = () => setCurrentView('main');

  const renderContent = () => {
    switch (currentView) {
      case 'register':
        return <RegisterForm onBack={handleBack} />;
      case 'login':
        return <LoginForm onBack={handleBack} />;
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
