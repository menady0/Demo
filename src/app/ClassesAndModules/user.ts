export class User {
  constructor(public username: string, public password: string, public email: string, public points: number, public progress: number){
    this.username = username
    this.password = password
    this.email = email
    this.points = points
    this.progress = progress
  }
}
