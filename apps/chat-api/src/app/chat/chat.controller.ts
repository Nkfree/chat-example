import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

    @Post()
    processMessage(@Body() payload: any): Promise<string> {
        console.log(payload);
        return this.chatService.postToOpenAI(payload["message"]);
    }
}
