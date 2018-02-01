import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = new Array();

  constructor() { }

  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }

}
