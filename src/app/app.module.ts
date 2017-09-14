import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// AngularFire Imports
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

// Environment Imports
import { environment } from '../environments/environment';

// Custom Components Imports
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { EventsFeedComponent } from './components/events-feed/events-feed.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';

// Services Imports
import { EventService } from './services/event.service'

const appRoutes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: 'edit-event', component: EditEventComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'login', component: LoginUserComponent },
  { path: '', component: EventsFeedComponent }
];

@NgModule({
  declarations: [
    RegisterUserComponent,
    EventsFeedComponent,
    LoginUserComponent,
    EditEventComponent,
    AddEventComponent,
    EditUserComponent,
    NavbarComponent,
    AppComponent
  ],
  imports: [AngularFireModule.initializeApp(environment.firebase), RouterModule.forRoot(appRoutes), BrowserModule],
  providers: [AngularFireDatabase, AngularFireAuth, EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
