import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const text = document.querySelector('.text p') as HTMLElement;
    if (text) {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (char, i) =>
            `<span style = "transform: rotate(${
              i * 28
            }deg); position: absolute; left: 50%; font-weight: bold; transform-origin: 0 30px; font-size: 7px">${char}</span>`
        )
        .join('');
    }
  }
  hide(){
    const parent = document.querySelector('.parent') as HTMLDivElement;
    const container = document.querySelector('.container') as HTMLDivElement;
    const blur = document.querySelector('.blur') as HTMLDivElement;
    const circle = document.querySelector('.circle') as HTMLDivElement
    const text= document.querySelector('.text') as HTMLDivElement
    const courses= document.querySelector('.courses') as HTMLDivElement
    
    document.querySelector('.arrow i')?.classList.toggle('bi-arrow-up')
    
    
    text.style.display = 'none'

    container.style.marginInline = '0'
    container.style.minHeight = '70px'
    container.style.borderRadius = '0'
    parent.classList.toggle('bckgroundToggle')
    blur.style.height = '70px'
    setTimeout(() => {
      circle.style.height = '0'
    }, 200);

    setTimeout(() => {
      circle.style.display = 'none';
    }, 600);
    courses.style.display = 'block'
    

    
  }
  menu(){
    const list = document.querySelector('nav i') as HTMLDialogElement;
    const ul = document.querySelector('nav ul') as HTMLDivElement;
    if(list.classList.toggle('bi-x-lg')){
      ul.style.opacity = '1'
      ul.style.width = 'calc(100% - 7%)'
    }
    else {
      ul.style.width = '0'
      ul.style.opacity = '0'
    }
  }
}
