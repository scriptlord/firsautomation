import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
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
