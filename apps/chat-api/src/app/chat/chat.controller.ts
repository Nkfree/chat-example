import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import OpenAI from 'openai';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

    @Post()
    process_message(@Body() payload: any): Promise<string> {
        console.log(payload);
        return this.chatService.postToOpenAI(payload["message"]);
    }
}
