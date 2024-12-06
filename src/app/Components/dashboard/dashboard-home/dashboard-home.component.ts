import { Component } from '@angular/core';
import { ServiceService } from '../../../ClassesAndModules/service.service';
import { User } from '../../../ClassesAndModules/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  arrOfUsers: User[];
  points: number = 0
  constructor(private _ServiceService:ServiceService){
    this.arrOfUsers = _ServiceService.getUsers();
  }
  markReadBtn: boolean = false
  read(){
    // const markRead = document.querySelector('.buttons button:first-child')
    // const span = document.querySelector('.buttons button:first-child span') as HTMLDivElement
    // const next = document.querySelector('.buttons button:last-child') as HTMLDivElement
    // span.innerHTML = 'read'
    // this.markReadBtn = true
    // this.points += 5
    // markRead?.classList.toggle('readed')
    // next.style.opacity = '1'
    this.markRead()
    this.getRandomQuestion();
  }
  markRead(){
    this.markReadBtn = !this.markReadBtn
    const markRead = document.querySelector('.buttons button:first-child')
    markRead?.classList.toggle('readed')
    const span = document.querySelector('.buttons button:first-child span') as HTMLDivElement
    if(this.markReadBtn){
      span.innerHTML = 'read'
    }
    else {
      span.innerHTML = 'Mark as read'
    }
  }

  Quiz1: Object[] = [
    {
      Question: "What is the primary function of the internet?",
      options: ['To send emails', 'To connect computer globally', 'To watch videos', 'To play online games'],
      answer: 'To connect computer globally'
    },
    {
      Question: "Which protocol is essential for the internet to function?",
      options: ['HTTP', "FTP", 'TCP/IP', 'SMTP'],
      answer: 'TCP/IP'
    },
    {
      Question: "What is the role of an IP address?",
      options: ['To identify a website', 'To encrypt data', 'To store cookies', 'To locate a device on the internet'],
      answer: 'To locate a device on the internet'
    },
    {
      Question: "The internet is a network of networks.",
      options: ['True', 'False'],
      answer: 'True'
    },
    {
      Question: "An IP address is used to identify a specific device on the internet.",
      options: ['True', 'False'],
      answer: 'True'
    }
  ]
  randomQuestion: any = null;  // Variable to store the random question
  selectedAnswer: string = ''; // Holds the user's selected answer
  answerChecked: boolean | null = null; // To track if the answer has been checked
  // Method to select a random question
  getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * this.Quiz1.length);
    console.log(randomIndex);
    
    this.randomQuestion = this.Quiz1[randomIndex];
    this.selectedAnswer = ''; // Reset selected answer for each new question
    this.answerChecked = null; // Reset answer checked status
  }
  checked:boolean = false
  submitAnswer() {
    if(this.selectedAnswer === ''){
      alert("Please choose one of the answers!")
    }
    else {
      this.answerChecked = true; // Correct answer
      this.checked = true;
    }
    const next = document.querySelector('.quiz button:last-child') as HTMLDivElement

    if (this.selectedAnswer === this.randomQuestion.answer) {
        next.style.opacity = '1'
        this.points += 10
    } 
    else {
      setTimeout(() => {
        alert("Wrong answer, pay more attention to the class!")
        this.randomQuestion = null
        this.markRead()
        this.checked = false
      }, 500);
    }
  }
}
