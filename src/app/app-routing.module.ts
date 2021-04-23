import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { SportsComponent } from "src/app/sports/sports.component";
import { ContactComponent } from "src/app/contact/contact.component";
import { AboutComponent } from "src/app/about/about.component";
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Sports",
    component: SportsComponent
  },
  {
    path: "Contact",
    component: ContactComponent
  },
  {
    path: "About",
    component: AboutComponent
  },
  {
    path: "Chat",
    component: ChatComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
