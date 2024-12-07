import { Component, OnInit } from '@angular/core';
import { User } from '../../../ClassesAndModules/user';
import { ServiceService } from '../../../ClassesAndModules/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  users: User[];
  seletedUser: any;
  constructor(private _ServiceService: ServiceService){
    this.users = _ServiceService.getUsers();
    this.users = this.users.sort((a, b) => b.points - a.points)
    this.seletedUser = _ServiceService.getUserByUsername('Guest')
  }
}
