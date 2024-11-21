import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isMoved = false;
  toggleSlide(){
    this.isMoved = !this.isMoved;
    const learny = document.getElementById('learny') as HTMLDivElement;
    const login = document.querySelector('.login') as HTMLDivElement;

    if(this.isMoved){
      setTimeout(() => {
        learny.style.color = 'var(--dark)'
      }, 200);
      login.style.left = '10%'
      
    }
    else {
      setTimeout(() => {
        learny.style.color = 'var(--light)'
      }, 600);
      login.style.left = '55%'
    }

    this.switching(this.isMoved);
    this.switchingContext(this.isMoved);
    this.switchingBtn(this.isMoved);

  }

  switching(onRight:boolean){
    const h2 = document.querySelector('.login h2') as HTMLDivElement;
    const p = document.querySelector('.login p') as HTMLDivElement;
    const labelName = document.querySelector('.frmLogin label[for="name"]') as HTMLDivElement;
    const forgot = document.getElementById('forgot') as HTMLDivElement;
    const btn = document.querySelector('.btn button') as HTMLDivElement;
    setTimeout(() => {
      if(onRight){
        h2.innerHTML = 'Sign in to Learny.'
        p.innerHTML = 'or use your email account:'
        labelName.style.display = 'none'
        forgot.style.display = 'inline-block'
        btn.innerHTML = 'sign in'
      }
      else {
        h2.innerHTML = 'Create Account'
        p.innerHTML = 'or use your email for registration:'
        labelName.style.display = 'block'
        forgot.style.display = 'none'
        btn.innerHTML = 'sign up'
      }
    }, 300);
  }

  switchingContext(onRight:boolean){
    const h2 = document.querySelector('.slider-container .context1 h2') as HTMLDivElement;
    const p = document.querySelector('.slider-container .context1 p') as HTMLDivElement;
    const button = document.querySelector('.slider-container button') as HTMLDivElement;
    setTimeout(() => {
      if(!onRight){
        h2.innerHTML = 'Nice To Meet You!'
        h2.style.fontSize = '36px'

        p.innerHTML = 'Enter your personal details<br>and start jounray with us'

        button.textContent = 'sign up'
      }

      else {
        h2.innerHTML = 'Welcome Back!'
        h2.style.fontSize = '44px'
        
        p.innerHTML = `
        To keep connected with us please
        <br>login with personal info
        `
        
        button.textContent = 'sign in'     
      }
    }, 750);
  }

  switchingBtn(onRight:boolean){
    const btn = document.querySelector('.slider-container button') as HTMLDivElement;
    btn.style.color = 'var(--dark)'
    setTimeout(() => {
      if(!onRight){
        btn.innerHTML = 'sign in'
      }
      else{
        btn.innerHTML = 'sign up'
        
      }
      
      btn.style.color = 'white'
    }, 750);
  }
}
