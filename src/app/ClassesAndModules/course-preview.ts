export class CoursePreview {
  track:string;
  url: string;
  des: string;
  whatYouLearn: string[];
  syllabus: string[];
  constructor(track: string, url:string, des: string, whatYouLearn: string[], syllabus: string[]){
    this.track = track
    this.url = url
    this.des = des
    this.whatYouLearn = whatYouLearn
    this.syllabus = syllabus
  }
}
