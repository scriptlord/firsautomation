import { Component, OnInit, ElementRef } from '@angular/core';
import { fadeInOutAnimation } from '../../animations/route-transition';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [fadeInOutAnimation]
})
export class DashboardComponent implements OnInit {
  show = true
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
