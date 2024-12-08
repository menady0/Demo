import { Component } from '@angular/core';
import { CommunityComponent } from "../community/community.component";

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommunityComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {

}
