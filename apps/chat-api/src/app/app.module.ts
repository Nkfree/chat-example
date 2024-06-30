import { Module } from '@nestjs/common';
import { exampleFunction } from '@ukol-01/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';

@Module({
  imports: [],
  controllers: [AppController, ChatController],
  providers: [AppService, ChatService],
})
export class AppModule {
  constructor() {
    const result = exampleFunction();
    console.log(result);
  }
}
