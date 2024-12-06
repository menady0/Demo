import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  toggle(){
    const menu = document.querySelector('.menu')
    const content = document.querySelector('.content')
    const menu_list = document.querySelector('#menu-list') as HTMLDivElement;
    
    if(window.innerWidth > 650){      
      menu?.classList.toggle('closed');
      content?.classList.toggle('opened');
      menu_list?.classList.toggle('bi-list')
      if(menu_list?.classList.contains('bi-list')){
        menu_list.innerHTML = ''
      }
      else 
        menu_list.innerHTML = 'L'
    }
    else {
      menu?.classList.toggle('openedSmall');
      setTimeout(() => {
        menu?.classList.toggle('Height')
      }, 800);
    }
  }

  WelcomeHide(){
    const welcome = document.querySelector('.welcome') as HTMLDivElement;
    welcome.style.opacity = '0'
  }
}
