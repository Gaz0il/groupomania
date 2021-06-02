import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent} from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { HttpClientModule } from '@angular/common/http'
import { PostService } from './services/post.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignupComponent },
  { path: 'home', canActivate: [], component: HomeComponent },
  { path: 'user', canActivate: [], component: UserFormComponent },
  { path: 'post', canActivate: [], component: PostComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserFormComponent,
    LoginComponent,
    SignupComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
