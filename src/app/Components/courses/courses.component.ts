import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  // search(){
  //   const input = document.querySelector('input') as HTMLDivElement;
  //   input.style.opacity = '1'
  //   input.style.width = '100%'
  // }

  activeIcon: string = 'grid'; // Store which icon is currently active
  screenWidth: number = window.innerWidth; // To track screen width

  // ngOnInit is called when the component is initialized
  ngOnInit() {
    this.checkScreenSize(); // Ensure the correct view is selected on load
  }

  // HostListener listens to window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.checkScreenSize(); // Recheck the view whenever the screen is resized
  }

  // Check screen size and set active view to 'grid' if screen is small
  checkScreenSize() {
    if (this.screenWidth <= 768) {
      this.activeIcon = 'grid'; // Force grid view on small screens
    }
  }

  clicked(icon: string): void {
    this.activeIcon = icon; // Update the active icon
  }

  getClass(icon: string): string {
    if (this.activeIcon === icon) {

      return 'active';  // Apply the 'active' class when the icon is clicked
    }
    return 'inactive';  // Apply the 'inactive' class when the icon is not clicked
  }
  // Parent
  getViewClass(): string {
    // Return either 'grid-view' or 'list-view' for the parent container
    return this.activeIcon === 'grid' ? 'courses' : 'course.list-view';
  }

  getItemClass(): string {
    // For each item, we will apply either 'grid-view-item' or 'list-view-item' dynamically
    return this.activeIcon === 'grid' ? 'grid-view-item' : 'list-view-item';
  }

  course(): string{
    return this.activeIcon === 'grid' ? 'course' : 'list-view';
  }
  context(): string{
    return this.activeIcon === 'grid' ? 'context' : 'list-view';
  }
  info(): string{
    return this.activeIcon === 'grid' ? 'info' : 'list-view';
  }


  menuOpened = false;

  user(){
    const arrow = document.querySelector('.bi-caret-up-fill') as HTMLDivElement;
    const menu = document.querySelector('.user ul') as HTMLDivElement;
    if(this.menuOpened == false){
      arrow.style.opacity = '1';
    }
    
    else {
      arrow.style.opacity = '0';
    }
    
    this.menuOpened = !this.menuOpened;
    menu.classList.toggle('menuOpened')
  }
}
