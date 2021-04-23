// import { Injectable } from '@angular/core';
// import { io, Socket } from "socket.io-client";
// import { BehaviorSubject } from "rxjs"

// @Injectable({
//   providedIn: 'root'
// })

// export class ChatService {
//   socket : Socket
//   chatMessages : BehaviorSubject<any> = new BehaviorSubject([])
  
//   constructor() { 
//     this.socket = io("http://localhost:3800");
//   }

//   login(username : string){
//     this.socket.emit("login", username);
//   }

//   send(message : string){
//     this.socket.emit("chat", message);
//     this.chatMessages.next([ ...this.chatMessages.value, {message : message, self : true} ])
//   }
//   recieve(){
//     this.socket.on("message", (message)=>{
//       this.chatMessages.next([...this.chatMessages.value, message])
//       this.chatMessages.next([ ...this.chatMessages.value, { message : message, self : false }])
//     })
//   }
// }
