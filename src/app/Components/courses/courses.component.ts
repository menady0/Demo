import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../ClassesAndModules/course';
import { ServiceService } from '../../ClassesAndModules/service.service';
import { CoursePreview } from '../../ClassesAndModules/course-preview';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  arrOfCourses: Course[];
  arrOfPreview: CoursePreview[]
  safeUrl: SafeResourceUrl;
  constructor(private _ServiceService:ServiceService, private sanitizer: DomSanitizer){
    this.arrOfCourses = _ServiceService.getCourses();
    this.selectedCard = this.arrOfCourses[0]
    this.arrOfPreview = _ServiceService.getcoursePreview()
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("h");
  }
  search(input: string){
    if(input != '')
      this.arrOfCourses = this._ServiceService.searchCourse(input);
    else
      this.arrOfCourses = this._ServiceService.getCourses();
  }

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
  btns(): string {
    return this.activeIcon === 'grid' ? 'btns' : 'list-view';
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

  changeUrl(card: any) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(card.url);
  }
  
  isPreviewed:boolean = false;
  selectedCard: any;
  preview(card: any = null){
    if (card) {
      this.selectedCard = this.arrOfPreview.find((course) => course.track === card.courseName)
      this.changeUrl(this.selectedCard)
    }
    else {
      this.selectedCard = null
    } 
    const container = document.querySelector('.sliderContainer') as HTMLDivElement;
    const slider = document.querySelector('.slider') as HTMLDivElement;
    const body = document.body as HTMLDivElement;
    this.isPreviewed = !this.isPreviewed;
    if(this.isPreviewed){
      container.style.display = 'block'
      setTimeout(() => {
        container.style.opacity = '1'
        slider.style.bottom = '0'
      }, 200);
      body.style.overflow = 'hidden'
    }
    else {
      slider.style.bottom = '-100%'
      setTimeout(() => {
        container.style.opacity = '0'
        container.style.display = 'none'
      }, 1000);
      body.style.overflow = 'auto'
    }
    this.scrollToTop(slider)
    console.log(this.isPreviewed);
    
  }
  preview2(){
    const container = document.querySelector('.sliderContainer') as HTMLDivElement;
    const slider = document.querySelector('.slider') as HTMLDivElement;
    const body = document.body as HTMLDivElement;
    slider.style.bottom = '-100%'
    setTimeout(() => {
      container.style.opacity = '0'
      container.style.display = 'none'
    }, 1000);
    body.style.overflow = 'auto'
    this.isPreviewed = false
  }
  scrollToTop(Element: any) {
    Element.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

  hide(event: MouseEvent): void {
    const parentElement = (event.currentTarget as HTMLElement);
    const childElement = parentElement.querySelector('.slider') as HTMLElement;
    const body = document.body as HTMLDivElement;

    // Get the position of the parent div and the child div's height
    const parentRect = parentElement.getBoundingClientRect();
    const childHeight = childElement.offsetHeight;

    // Check if the click is within the parent div
    if (
      event.clientY >= parentRect.top && 
      event.clientY <= parentRect.top + parentRect.height
    ) {
      // Check if the click is in the top 25% of the parent div (above the child div)
      if (event.clientY < parentRect.top + parentRect.height - childHeight) {
        childElement.style.bottom = '-100%'
      
        setTimeout(() => {
          parentElement.style.opacity = '0'
          parentElement.style.display = 'none'
        }, 1000);
        setTimeout(() => {
          body.style.overflow = 'auto'
        }, 1000);
      }
    }
    this.isPreviewed = false;
    this.iframeStop();
  }

  // stop iframe video
  iframeStop(){
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const src = iframe.src;
      if (!src.includes('autoplay=1')) {        
        // If autoplay=1 is in the URL, that means the video is playing, so we pause it
        iframe.src = src.replace('&autoplay=1', ''); // Remove the autoplay parameter to pause it
      } 
    }
  }
  
  syllabus(){
    const CourseContent = document.querySelector('.subjects') as HTMLDivElement;
    const i = document.querySelector('.CourseContent .contentHeader i') as HTMLDivElement;
    CourseContent.classList.toggle('hideCourseContent');
    i.classList.toggle('rotateArrow');
  }

}
