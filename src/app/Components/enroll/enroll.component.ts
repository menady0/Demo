import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css',
})
export class EnrollComponent {
  // Iframe
  play() {
    const btn = document.querySelector('#empty') as HTMLDivElement;
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const src = iframe.src;
      if (src.includes('autoplay=1')) {
        // If autoplay=1 is in the URL, that means the video is playing, so we pause it
        iframe.src = src.replace('&autoplay=1', ''); // Remove the autoplay parameter to pause it
      } else {
        // If autoplay=1 is not in the URL, that means the video is paused, so we play it
        iframe.src = src + '&autoplay=1'; // Add autoplay parameter to play the video
      }
      // iframe.src = src + "&autoplay=1"
    }
    const container = document.querySelector('.container') as HTMLDivElement;
    container.classList.toggle('expanded')
  }

  visible:boolean = false;
  isButtonClicked:boolean = false;
  toggleBtn(event: MouseEvent){
  this.visible = !this.visible;


  this.isButtonClicked = true; // Set the flag to true when button is clicked

  // Stop the click event from propagating to document:click
  if(event)
    event.stopPropagation();
  
  // Reset the flag after a short delay, so the next click is handled normally
  setTimeout(() => {
    this.isButtonClicked = false;
  }, 100);
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const pageHeight = window.innerHeight;
    const clickPosition = event.clientY;
    // If the click is on the top 20% of the page, slide the div dow
    if(this.visible && !this.isButtonClicked){
      if (clickPosition <= pageHeight * 0.25) {
        this.visible = false;
      }
    }
  }
}
