import { Request, Response } from 'express';

// Имитация AI агента для локальной разработки
export const mockAIAgent = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { userMessage, requestId, callbackUrl } = req.body;

    console.log('Mock AI Agent получил запрос:', {
      userMessage,
      requestId,
      callbackUrl,
    });

    // Имитируем обработку AI агента
    const processingTime = Math.random() * 3000 + 1000; // 1-4 секунды

    setTimeout(async () => {
      // Генерируем ответ в зависимости от сообщения
      let aiResponse = 'Извините, я не понял ваш запрос.';
      let suggestions = ['Попробуйте переформулировать'];

      if (userMessage.toLowerCase().includes('привет')) {
        aiResponse =
          'Привет! Я ваш AI помощник для планирования путешествий. Чем могу помочь?';
        suggestions = [
          'Планирование маршрута',
          'Рекомендации отелей',
          'Информация о визах',
        ];
      } else if (userMessage.toLowerCase().includes('париж')) {
        aiResponse =
          'Отличный выбор! Париж - прекрасный город для путешествия. Вот что я рекомендую:\n\n1. **Достопримечательности**: Эйфелева башня, Лувр, Нотр-Дам\n2. **Отели**: Район Марэ или Латинский квартал\n3. **Транспорт**: Метро очень удобно\n4. **Еда**: Обязательно попробуйте круассаны и французскую кухню';
        suggestions = [
          'Подробнее о достопримечательностях',
          'Рекомендации отелей',
          'Составить маршрут',
        ];
      } else if (userMessage.toLowerCase().includes('бюджет')) {
        aiResponse =
          'Для планирования бюджета важно учесть:\n\n- **Проживание**: 80-200€ за ночь\n- **Питание**: 20-50€ в день\n- **Транспорт**: 7-15€ в день\n- **Развлечения**: 30-100€ в день\n\nОбщий бюджет на неделю: 800-2000€';
        suggestions = [
          'Экономные варианты',
          'Люксовые предложения',
          'Калькулятор бюджета',
        ];
      } else if (userMessage.toLowerCase().includes('виза')) {
        aiResponse =
          'Для поездки в Европу гражданам России нужна Шенгенская виза:\n\n1. **Документы**: Паспорт, фото, справки\n2. **Срок**: 5-15 рабочих дней\n3. **Стоимость**: 35-80€\n4. **Страховка**: Обязательна\n\nРекомендую подавать за 1-2 месяца до поездки.';
        suggestions = ['Список документов', 'Консульства', 'Страховка'];
      } else {
        aiResponse =
          'Я помогу вам спланировать идеальное путешествие! Расскажите, куда хотите поехать, какой у вас бюджет и предпочтения.';
        suggestions = [
          'Популярные направления',
          'Советы путешественникам',
          'Планирование маршрута',
        ];
      }

      // Отправляем ответ на callback URL
      if (callbackUrl) {
        try {
          const callbackResponse = await fetch(callbackUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'MockAI-Agent/1.0',
            },
            body: JSON.stringify({
              type: 'ai_response',
              requestId,
              data: {
                aiResponse,
                suggestions,
              },
            }),
          });

          console.log('Mock AI Agent отправил ответ на callback:', {
            status: callbackResponse.status,
            requestId,
          });
        } catch (error) {
          console.error('Ошибка отправки callback:', error);
        }
      }
    }, processingTime);

    // Сразу возвращаем подтверждение
    res.status(200).json({
      success: true,
      message: 'Mock AI Agent получил запрос и обрабатывает его',
      requestId,
      processingTime: Math.round(processingTime),
    });
  } catch (error) {
    console.error('Ошибка Mock AI Agent:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка обработки запроса',
    });
  }
};
