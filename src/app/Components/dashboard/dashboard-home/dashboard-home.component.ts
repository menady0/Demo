import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../ClassesAndModules/service.service';
import { User } from '../../../ClassesAndModules/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css',
})
export class DashboardHomeComponent implements OnInit{
  arrOfUsers: User[];
  points: number;
  safeUrl: SafeResourceUrl;
  index:number;
  selectedUser: any;

  constructor(private _ServiceService: ServiceService, private sanitizer: DomSanitizer) {
    this.arrOfUsers = _ServiceService.getUsers();
    this.selectedUser = _ServiceService.getUserByUsername('Guest')
    this.index = this.selectedUser.progress
    this.points = this.selectedUser.points
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.my_section[this.index].url);
  }
  markReadBtn: boolean = false;
  read() {
    // const markRead = document.querySelector('.buttons button:first-child')
    // const span = document.querySelector('.buttons button:first-child span') as HTMLDivElement
    // const next = document.querySelector('.buttons button:last-child') as HTMLDivElement
    // span.innerHTML = 'read'
    // this.markReadBtn = true
    // this.points += 5
    // markRead?.classList.toggle('readed')
    // next.style.opacity = '1'
    this.markRead();
    this.getRandomQuestion();
  }
  markRead() {
    this.markReadBtn = !this.markReadBtn;
    const markRead = document.querySelector('.buttons button:first-child');
    markRead?.classList.toggle('readed');
    const span = document.querySelector(
      '.buttons button:first-child span'
    ) as HTMLDivElement;
    if (this.markReadBtn) {
      span.innerHTML = 'read';
    } else {
      span.innerHTML = 'Mark as read';
    }
  }


  randomQuestion: any = null; // Variable to store the random question
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
  checked: boolean = false;
  submitAnswer() {
    if (this.selectedAnswer === '') {
      alert('Please choose one of the answers!');
    } else {
      this.answerChecked = true; // Correct answer
      this.checked = true;
      const next = document.querySelector(
        '.quiz button:last-child'
      ) as HTMLDivElement;

      if (this.selectedAnswer === this.randomQuestion.answer) {
        next.style.opacity = '1';
        this.points += 10;
      } else {
        setTimeout(() => {
          alert('Wrong answer, pay more attention to the class!');
          this.randomQuestion = null;
          this.markRead();
          this.checked = false;
        }, 500);
      }
    }
  }

  Quiz1: Object[] = [
    {
      Question: 'What is the primary function of the internet?',
      options: [
        'To send emails',
        'To connect computer globally',
        'To watch videos',
        'To play online games',
      ],
      answer: 'To connect computer globally',
    },
    {
      Question: 'Which protocol is essential for the internet to function?',
      options: ['HTTP', 'FTP', 'TCP/IP', 'SMTP'],
      answer: 'TCP/IP',
    },
    {
      Question: 'What is the role of an IP address?',
      options: [
        'To identify a website',
        'To encrypt data',
        'To store cookies',
        'To locate a device on the internet',
      ],
      answer: 'To locate a device on the internet',
    },
    {
      Question: 'The internet is a network of networks.',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      Question:
        'An IP address is used to identify a specific device on the internet.',
      options: ['True', 'False'],
      answer: 'True',
    },
  ];
  Quiz2: Object[] = [
    {
      Question: 'What is the primary function of a router in a network?',
      options: [
        'To store data',
        'To connect computers to the internet',
        'To ensure messages are sent to the correct destination',
        'To provide wireless connectivity',
      ],
      answer: 'To ensure messages are sent to the correct destination',
    },
    {
      Question: 'What piece of equipment is needed to connect a network to the telephone infrastructure?',
      options: ['Router', 'Modem', 'Switch', 'Hub'],
      answer: 'Modem',
    },
    {
      Question:
        'The Internet and the Web are the same thing.',
      options: ['True', 'False'],
      answer: 'False',
    },
  ];
  Quiz3: Object[] = [
    {
      Question: 'What is the primary role of a web server?',
      options: [
        'To create web pages',
        'To store and deliver web content',
        'To design websites',
        'To manage user data',
      ],
      answer: 'To store and deliver web content',
    },
    {
      Question: "Which of the following is a search engine's main function?",
      options: ['To host websites', 'To index and retrieve web pages', 'To design web pages', 'To store user data'],
      answer: 'To index and retrieve web pages',
    },
    {
      Question:
        'A website is a collection of web pages that are linked together.',
      options: ['True', 'False'],
      answer: 'True',
    },
  ];
  Quiz4: Object[] = [
    {
      Question: 'What is the primary function of the internet?',
      options: [
        'To send emails',
        'To connect computers globally',
        'To watch videos',
        'To play online games',
      ],
      answer: 'To connect computers globally',
    },
    {
      Question:
        'The internet is a network of networks.',
      options: ['True', 'False'],
      answer: 'True',
    },
  ];
  Quiz5: Object[] = [
    {
      Question: 'What is the primary role of a client in a network?',
      options: [
        'To store data',
        'To request and display web content',
        'To manage network traffic',
        'To provide wireless connectivity',
      ],
      answer: 'To request and display web content',
    },
    {
      Question:
        'Servers are responsible for storing and delivering web content to clients.',
      options: ['True', 'False'],
      answer: 'True',
    },
  ];

  my_section: Content[] = [
    {
      title: "How Does the Interent Work?",
      url: 'https://www.youtube.com/embed/TNQsmPf24go?si=N9hMHwIcASSxAYDR',
      Task: this.Quiz1
    },
    {
      title: "Mozilla - How Does the Internet Work?",
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work',
      Task: this.Quiz2
    },
    {
      title: "What is the difference between web page, website, web server, and search engine?",
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines',
      Task: this.Quiz3
    },
    {
      title: "Google - What is a browser?",
      url: 'https://www.youtube.com/embed/BrXPcaRlBqo?si=bcxmT8-T41rJYfE1',
      Task: this.Quiz4
    },
    {
      title: "How the Web Works",
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works#clients_and_servers',
      Task: this.Quiz5
    }
  ]

  changeUrl(index: number) {
    this.index = index;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.my_section[this.index].url);
  }
  next(){
    this.markRead();
    this.randomQuestion = null;
    this.checked = false;
    if(this.index < this.my_section.length - 1)
      this.index++
    else
      alert("To be continue...")
    this.selectedUser.progress = this.index
    this.selectedUser.points = this.points
    if(this.my_section[this.index].url.includes('www.youtube.com')){
      document.querySelector('.frame iframe')?.classList.remove('hidden')
      document.querySelector('.frame a')?.classList.remove('vis')
    }
    else{
      document.querySelector('.frame iframe')?.classList.add('hidden')
      document.querySelector('.frame a')?.classList.add('vis')
    }
    this.changeUrl(this.index)
  }
  ngOnInit(): void {
    if(this.my_section[this.index].url.includes('www.youtube.com')){
      document.querySelector('.frame iframe')?.classList.remove('hidden')
      document.querySelector('.frame a')?.classList.remove('vis')
    }
    else{
      document.querySelector('.frame iframe')?.classList.add('hidden')
      document.querySelector('.frame a')?.classList.add('vis')
    }
  }
}

interface Content {
  title: string;
  url: string;
  Task: Object
}