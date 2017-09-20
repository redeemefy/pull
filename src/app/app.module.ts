import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { FormsModule } from '@angular/forms';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

// AngularFire Imports
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

// Environment Imports
import { environment } from '../environments/environment';

// Custom Components Imports
import { EventsFeedComponent, OrderByDate } from './components/events-feed/events-feed.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';

// Services Imports
import { EventService } from './services/event.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

// Guards Imports
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
  { path: 'user-detail', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'edit-event/:id', component: EditEventComponent, canActivate: [AuthGuard] },
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: 'add-event', component: AddEventComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: EventsFeedComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginUserComponent }
];

@NgModule({
  declarations: [
    RegisterUserComponent,
    UserDetailComponent,
    EventsFeedComponent,
    LoginUserComponent,
    EditEventComponent,
    AddEventComponent,
    EditUserComponent,
    ProfileComponent,
    NavbarComponent,
    AppComponent,
    OrderByDate
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [AngularFireDatabase, AngularFireAuth, EventService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
