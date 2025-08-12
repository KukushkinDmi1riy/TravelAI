// Тестовый файл для проверки интеграции с вебхуком
// Запуск: node test-webhook.js

const testWebhookIntegration = async () => {
  const webhookUrl = 'https://n8n.gulnazbakinova.com/webhook/travel_bd_test';

  const testPayload = {
    userId: 'test-user-123',
    userMessage:
      'Привет! Я хочу спланировать путешествие в Париж. Можешь помочь?',
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
        duration: '1 week',
        interests: ['culture', 'food', 'sightseeing'],
      },
      currentLocation: 'Москва',
    },
  };

  try {
    console.log('Отправка тестового сообщения на вебхук...');
    console.log('URL:', webhookUrl);
    console.log('Payload:', JSON.stringify(testPayload, null, 2));

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'TravelAI-Test/1.0',
      },
      body: JSON.stringify(testPayload),
    });

    console.log('Статус ответа:', response.status);
    console.log(
      'Заголовки ответа:',
      Object.fromEntries(response.headers.entries()),
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Ответ от вебхука:', JSON.stringify(responseData, null, 2));

    console.log('✅ Тест успешно завершен!');
  } catch (error) {
    console.error('❌ Ошибка при тестировании вебхука:', error.message);
  }
};

// Запускаем тест
testWebhookIntegration();
