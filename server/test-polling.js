// Тестовый файл для проверки polling системы
// Запуск: node test-polling.js

const testPollingSystem = async () => {
  const API_BASE_URL = 'http://localhost:3005/api';

  console.log('🧪 Тестирование polling системы...');

  try {
    // Шаг 1: Отправляем сообщение
    console.log('\n📤 Шаг 1: Отправка сообщения...');
    const sendResponse = await fetch(`${API_BASE_URL}/chat/send-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Добавьте токен аутентификации если нужно
      },
      body: JSON.stringify({
        message: 'Привет! Помоги спланировать путешествие',
        conversationHistory: [],
        context: {
          userProfile: {
            firstName: 'Тест',
            lastName: 'Пользователь',
          },
        },
      }),
    });

    if (!sendResponse.ok) {
      throw new Error(`HTTP error! status: ${sendResponse.status}`);
    }

    const sendData = await sendResponse.json();
    console.log('Ответ отправки:', JSON.stringify(sendData, null, 2));

    if (!sendData.requestId) {
      console.log('❌ requestId не получен');
      return;
    }

    console.log('✅ requestId получен:', sendData.requestId);

    // Шаг 2: Тестируем polling
    console.log('\n📥 Шаг 2: Тестирование polling...');

    for (let i = 1; i <= 5; i++) {
      console.log(`\n🔄 Попытка ${i}/5...`);

      const pollResponse = await fetch(
        `${API_BASE_URL}/chat/poll-response/${sendData.requestId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Добавьте токен аутентификации если нужно
          },
        },
      );

      const pollData = await pollResponse.json();
      console.log('Статус polling:', pollResponse.status);
      console.log('Ответ polling:', JSON.stringify(pollData, null, 2));

      if (pollData.success && pollData.aiResponse) {
        console.log('✅ Получен финальный ответ!');
        break;
      }

      if (i < 5) {
        console.log('⏳ Ожидание 3 секунды...');
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }

    console.log('\n✅ Тест polling завершен!');
  } catch (error) {
    console.error('❌ Ошибка при тестировании:', error.message);
  }
};

// Запускаем тест
testPollingSystem();
