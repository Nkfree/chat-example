import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  message : string | null = '';

  constructor(private readonly httpClient : HttpClient) { }

  postMessage(message : string) : Observable<any> {
    return this.httpClient.post<string>('http://localhost:3000/api/chat', { "message": message }, {responseType: 'json', observe: 'response'});
  }
}
