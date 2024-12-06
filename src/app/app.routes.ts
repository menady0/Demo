import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { EnrollComponent } from './Components/enroll/enroll.component';
import { LeaderboardComponent } from './Components/dashboard/leaderboard/leaderboard.component';
import { DashboardHomeComponent } from './Components/dashboard/dashboard-home/dashboard-home.component';

export const routes: Routes = [
  {'path': 'home', 'title': 'Learny. | Learn Whatever You Want At Anytime', component: HomeComponent},
  {'path': 'courses', 'title': 'Learny. | Courses', component: CoursesComponent},
  {'path': 'login', 'title': 'Learny. | Join Us', component: LoginComponent},
  {'path': 'about', 'title': 'Learny. | About Us', component: AboutComponent},
  {'path': 'dashboard', 'title': 'Learny. | Dashboard', component: DashboardComponent, 
    children: [
      {path: 'Home Dashboard', component: DashboardHomeComponent},
      {path: 'leaderboard', component: LeaderboardComponent},
      {path: '', redirectTo: 'Home Dashboard', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}

    ]},
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {'path': "**", 'title': "404", component: PageNotFoundComponent}
];
