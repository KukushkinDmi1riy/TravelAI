import express from 'express';
import type { Request, Response } from 'express';
import OpenAI from 'openai';

const router = express.Router();

// POST /api/chat
// Body: { message: string, history?: Array<{ role: 'user'|'assistant'|'system'; content: string }> }
router.post('/', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.TRAVELAI_CHAT_KEY;
    if (!apiKey) {
      return res
        .status(500)
        .json({ success: false, message: 'OpenAI API key is not configured' });
    }

    const { message, history } = req.body as {
      message?: string;
      history?: Array<{
        role: 'user' | 'assistant' | 'system';
        content: string;
      }>;
    };

    if (!message || typeof message !== 'string') {
      return res
        .status(400)
        .json({ success: false, message: 'Поле message обязательно' });
    }

    const openai = new OpenAI({ apiKey });

    const systemPrompt =
      'Ты TravelPro AI — русскоязычный помощник для путешествий. Помогай с отелями, ценами, визами, перелётами и общением с клиентами. Отвечай кратко, структурировано и по делу.';

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...(Array.isArray(history) ? history : []),
      { role: 'user' as const, content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.3,
    });

    const reply = completion.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return res
        .status(502)
        .json({ success: false, message: 'Пустой ответ от модели' });
    }

    return res.status(200).json({ success: true, reply });
  } catch (error: any) {
    console.error('Chat error:', error);
    const message = error?.message || 'Ошибка генерации ответа';
    return res.status(500).json({ success: false, message });
  }
});

export default router;
