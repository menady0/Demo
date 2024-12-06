import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { FooterComponent } from "./Components/footer/footer.component";
import { EnrollComponent } from "./Components/enroll/enroll.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { DashboardHomeComponent } from "./Components/dashboard/dashboard-home/dashboard-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardHomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learny';
}
