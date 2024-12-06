export class User {
  constructor(public username: string, public password: string, public points: number){
    this.username = username
    this.password = password
    this.points = points
  }
}
