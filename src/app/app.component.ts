import { Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [    
        query(':enter, :leave', style({ position: 'fixed', width:'100%', opacity: 0 })),
        group([         query(':enter', [          animate('0.9s ease-in-out', style({ opacity: 1 }))]),
          query(':leave', [
            animate('0.9s ease-in-out', style({ opacity: 0 }))]),
            
        ])
      ])
    ])
  ]
})
export class AppComponent {
  getState(outlet:any) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }
  title = 'FIRS Automation';
  constructor(private elementRef: ElementRef,  public  _router: Router) { }

  ngOnInit() {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
