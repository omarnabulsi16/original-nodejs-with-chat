import { Injectable } from '@angular/core';
import { io, Socket } from "socket.io-client";
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  socket : Socket
  chatMessages : BehaviorSubject<any> = new BehaviorSubject([])
  totalusers: BehaviorSubject<any> = new BehaviorSubject({total : 0, names : []})
  
  constructor() { 
    this.socket = io("http://localhost:3800");
  }

  login(username : string){
    this.socket.emit("login", username);
  }

  send(message : string, user : string){
    this.socket.emit("chat", {message, user});
    this.chatMessages.next([ ...this.chatMessages.value, {message : message, self : true} ])
  }

  recieve(){
    this.socket.on("message", (message)=>{
      this.chatMessages.next([...this.chatMessages.value, message])

      // this.chatMessages.next([ ...this.chatMessages.value, {message : message, self :false,}])
    })
    // this.socket.on("login", (message) => {
    //   this.totalusers.next(message.total)
    // })
    this.socket.on("totalusers", (message) => {
      this.totalusers.next(message)
    })
  }
}
