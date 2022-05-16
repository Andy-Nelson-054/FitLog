import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions.component';
import { NewSessionComponent } from './new-session/new-session.component';
import { PastSessionComponent } from './past-session/past-session.component';



@NgModule({
  declarations: [
    SessionsComponent,
    NewSessionComponent,
    PastSessionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SessionsModule { }
