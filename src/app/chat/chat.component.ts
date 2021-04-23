import { Component, OnInit } from '@angular/core';
import { ChatService } from "../services/chat.service";

@Component({
  selector: 'thechat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message : string = "";
  username : string ="";
  loggedInUserName : string = "";
  messages : any[] = [];
  users : any;
  selectedUser = "";

  constructor(private chat : ChatService ) { }

  ngOnInit(): void {
    this.chat.chatMessages.subscribe((messages)=>{
      this.messages = messages;
    })
    this.chat.totalusers.subscribe((users)=>{
      this.users = users;
    });
  }

  sendMessage(){
   this.chat.send(this.message, this.selectedUser); 
  }

  loginUser(){
    this.loggedInUserName = this.username;
    this.chat.login(this.loggedInUserName);
  }
}
