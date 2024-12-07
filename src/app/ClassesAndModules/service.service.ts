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
        courseDes: "This program will help you master frontend engineering using JavaScript, NodeJS, and React.",
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
        email: "",
        points: 0,
        progress: 0
      },
      {
        username: "Michael",
        password: "",
        email: "",
        points: 200,
        progress: 0
      },
      {
        username: "David",
        password: "",
        email: "",
        points: 20,
        progress: 0
      },
      {
        username: "Joseph",
        password: "",
        email: "",
        points: 60,
        progress: 0
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
  getUserByUsername(username: string) {
    return this.Users.find(user => user.username === username);
  }
  // addUser(usrname: string, email: string, pass: string, pts: number = 0, progress = 0): void {
  //   if(!this.Users.find(e => e.email == email)){
  //     let us = {
  //       username: usrname,
  //       password: pass,
  //       email: email,
  //       points: pts,
  //       progress: progress
  //     }
  //     this.Users.push(us)
  //     alert("Done")
  //   }
  //   else {
  //     alert("This email is already exsit, Please login!")
  //   }
  // }

}
