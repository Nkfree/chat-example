import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
  });

@Injectable()
export class ChatService {
    async postToOpenAI(message : string) : Promise<string> {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `${message}` }],
            model: 'gpt-3.5-turbo',
          });

        console.log(chatCompletion);

        return chatCompletion.choices[0].message.content;
    }
}
