// Тестовый файл для проверки n8n workflow
// Запуск: node test-n8n-workflow.js

const testN8nWorkflow = async () => {
  const webhookUrl = 'https://n8n.gulnazbakinova.com/webhook/travel_bd_test';

  const testPayload = {
    userId: 'test-user-123',
    userMessage:
      'Привет! Я хочу спланировать путешествие в Париж на 5 дней. Бюджет средний. Что посоветуешь?',
    conversationHistory: [
      {
        id: 'msg-1',
        userId: 'test-user-123',
        message: 'Привет!',
        timestamp: new Date().toISOString(),
        isFromUser: true,
      },
    ],
    context: {
      userProfile: {
        firstName: 'Тест',
        lastName: 'Пользователь',
        email: 'test@example.com',
      },
      travelPreferences: {
        budget: 'medium',
        duration: '5 days',
        destination: 'Paris',
        interests: ['culture', 'food', 'sightseeing'],
      },
      currentLocation: 'Москва',
    },
  };

  console.log('🧪 Тестирование n8n workflow...');
  console.log('URL:', webhookUrl);
  console.log('Payload:', JSON.stringify(testPayload, null, 2));

  try {
    console.log('\n📤 Отправка запроса...');
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'TravelAI-Test/1.0',
      },
      body: JSON.stringify(testPayload),
    });

    console.log('📊 Статус ответа:', response.status);
    console.log(
      '📋 Заголовки ответа:',
      Object.fromEntries(response.headers.entries()),
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('\n📥 Ответ от n8n workflow:');
    console.log(JSON.stringify(responseData, null, 2));

    // Анализ ответа
    console.log('\n🔍 Анализ ответа:');

    if (responseData.message === 'Workflow was started') {
      console.log(
        '❌ Workflow запущен асинхронно - нужна настройка для немедленного ответа',
      );
      console.log('💡 Рекомендации:');
      console.log('   1. Добавьте "Respond to Webhook" узел в n8n');
      console.log('   2. Настройте AI Agent для немедленного ответа');
      console.log('   3. Используйте синхронный режим workflow');
    } else if (responseData.response || responseData.aiResponse) {
      console.log('✅ Получен реальный ответ от AI агента!');
      console.log(
        '📝 Ответ:',
        responseData.response || responseData.aiResponse,
      );
      if (responseData.suggestions) {
        console.log('💡 Предложения:', responseData.suggestions);
      }
    } else {
      console.log('⚠️  Неожиданный формат ответа');
      console.log(
        '💡 Ожидаемый формат: { response: "...", suggestions: [...] }',
      );
    }

    console.log('\n✅ Тест завершен!');
  } catch (error) {
    console.error('❌ Ошибка при тестировании:', error.message);
    console.log('\n🔧 Возможные решения:');
    console.log('   1. Проверьте URL webhook');
    console.log('   2. Убедитесь, что n8n workflow активен');
    console.log('   3. Проверьте настройки AI Agent в n8n');
  }
};

// Запускаем тест
testN8nWorkflow();
