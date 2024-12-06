import { Injectable } from '@angular/core';
import { Course } from './course';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Courses: Course[];
  Users: User[];
  constructor() { 
    this.Courses = [
      {
        img: "Courses/frontend.jpg",
        courseName: "Frontend",
        courseDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laborum.",
        lessons: 22,
        len: 31
      },
      {
        img: "Courses/backend.jpg",
        courseName: "Backend",
        courseDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laborum.",
        lessons: 25,
        len: 24
      }
    ]
    this.Users = [
      {
        username: "Guest",
        password: "",
        points: 0
      }
    ]
  }

  getCourses(): Course[] {
    return this.Courses;
  }
  searchCourse(input: string): Course[] {
    return this.Courses.filter((course) => course.courseName.toLowerCase().includes(input.toLowerCase()))
  }
  getUsers():User[]{
    return this.Users;
  }
  addUser(usrname: string, pass: string, pts: number): void {
    let us = {
      username: usrname,
      password: pass,
      points: pts
    }
    this.Users.push(us)
  }

}
