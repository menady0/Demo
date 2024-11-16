import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginComponent}
];
