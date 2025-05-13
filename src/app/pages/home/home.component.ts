import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { NgxTypedWriterComponent } from 'ngx-typed-writer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [NgxTypedWriterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;
  isReady: boolean = false;

  ngAfterViewInit() {
    setTimeout(() => {
      // Log the element to make sure it's correctly captured
      console.log('typedElement:', this.typedElement);
      
      if (this.typedElement) {
        this.isReady = true;
      } else {
        console.error('typedElement is not available');
      }
    }, 0);
  }
}