import { Injectable } from '@angular/core';
import { Course } from './course';
import { User } from './user';
import { CoursePreview } from './course-preview';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Courses: Course[];
  coursePreview: CoursePreview[];
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
        courseDes: "This program is designed to introduce you to NodeJS and its architecture.",
        lessons: 25,
        len: 24
      },
      {
        img: "Courses/AI.jpg",
        courseName: "AI",
        courseDes: "This program covers the basics of generative AI, LLMs, prompt engineering, and more!",
        lessons: 20,
        len: 16
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

    this.coursePreview = [
      {
        track: 'Frontend',
        url: "https://www.youtube.com/embed/GJ8jidDdWVg",
        des: "Front-end development focuses on creating the visual and interactive aspects of websites and applications, ensuring a seamless user experience through HTML, CSS, and JavaScript.",
        whatYouLearn: [
          ' Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.', 
          ' Learn to use React in relation to Javascript libraries and frameworks.', 
          ' Learn Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.', 
          ' Prepare for a coding interview, learn best approaches to problem-solving, and build portfolio-ready projects you can share during job interviews.'
        ],
        syllabus: [
          'Intro to the Internet and Web',
          'HTML and CSS',
          'Git Basics',
          'JavaScript Basics',
          'Advanced JavaScript',
          'Asynchronous JavaScript',
          'React Basics',
          'Advanced React'
        ]
      },
      {
        track: 'Backend',
        url: "https://www.youtube.com/embed/cbSrsYiRamo?si=G4XwvEAZDaxhkNY1",
        des: "The backend is the part of a system that handles data processing, storage, and server-side logic. It supports the frontend by managing databases, APIs, and server requests, ensuring the application functions properly.",
        whatYouLearn: [
          ' Gain the technical skills required to become a qualified back-end developer.', 
          ' Build a portfolio using your new skills and begin interview preparation including tips for what to expect when interviewing for engineering jobs.', 
          ' Learn to use programming systems including Python Syntax, Linux commands, Git, SQL, Version Control, Cloud Hosting, APIs, JSON, XML and more.', 
          ' Learn in-demand programming skills and how to confidently use code to solve problems.'
        ],
        syllabus: [
          ' Introduction to NodeJS',
          'Understanding NodeJS Architecture',
          'Core Built-in NodeJS Modules for Backend Development',
          'Creating a Server with NodeJS and HTTP'
        ]
      },
      {
        track: 'AI',
        url: "https://www.youtube.com/embed/ad79nYk2keg?si=lwK4GGUEsaLXzFde",
        des: "AI (Artificial Intelligence) refers to the simulation of human intelligence in machines, allowing them to perform tasks like learning, problem-solving, and decision-making. It uses algorithms and data to mimic cognitive functions such as recognizing patterns and making predictions.",
        whatYouLearn: [
          '  Describe what AI is and explain the core concepts related to AI.', 
          ' Demonstrate how AI applications and use cases can transform our lives and our work', 
          ' Recognize the potential and impact of AI to transform businesses and careers.', 
          ' Describe the issues, limitations, and ethical concerns surrounding AI.'
        ],
        syllabus: [
          'Introduction to AI and Machine Learning',
          'Deep Learning Fundamentals',
          'Introduction to Generative AI Technology',
          'GPTs and LLMs',
          'Stable Diffusion',
          'Computer Vision',
          'Responsible AI and Ethical Considerations',
          'Future Directions'
        ]
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

  getcoursePreview(): CoursePreview[] {
    return this.coursePreview;
  }
}
