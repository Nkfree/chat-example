import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { ChatService } from '../../app/chat.service';

@Component({
  selector: 'chatpage-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ],
  templateUrl: './chatpage.component.html',
  styleUrl: './chatpage.component.css',
})
export class ChatpageComponent {
  constructor(private chatService : ChatService) {}

  messageToOpenAIControl = new FormControl('');

  sendMessage() {
    let message : string = this.messageToOpenAIControl.value == null ? '' : this.messageToOpenAIControl.value;

    if (message != null) {
      this.chatService.postMessage(message).subscribe(response => {
        console.log(response.body['content']);
        this.messageToOpenAIControl.setValue(response.body['content']);
      }
      );
    }
  }
}
