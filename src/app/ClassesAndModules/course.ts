export class Course {
  constructor(public img:string, public courseName: string, public courseDes: string, public lessons: number, public len: number){
    this.img = img;
    this.courseName = courseName
    this.courseDes = courseDes
    this.lessons = lessons
    this.len = len
  }
}
