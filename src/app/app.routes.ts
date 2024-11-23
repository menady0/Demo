import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';

export const routes: Routes = [
  {path: 'home', title: 'Learny. | Learn Whatever You Want At Anytime', component: HomeComponent},
  {path: 'courses', title: 'Learny. | Courses', component: CoursesComponent},
  {path: 'login', title: 'Learny. | Join Us', component: LoginComponent},
  {path: 'about', title: 'Learny. | About Us', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  // {path: "**", title: "404", component: PageNotFoundComponent},
];
