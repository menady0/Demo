import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CoursesComponent,
    LoginComponent,
    AboutComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learny';
}
