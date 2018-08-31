import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  /** Log a HeroService message with the MessageService */

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
