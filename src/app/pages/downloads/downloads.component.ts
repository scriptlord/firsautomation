import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/services/validate/validate.sevice';

@Component({
  selector: 'app-download',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
})
export class DownloadsComponent implements OnInit {
  show = true
  users: any[] = []
  isLoading:boolean=false
  dateValue!:string
  newDateValue!:string
  constructor(
    private router: Router,
    private validateService:ValidateService,
    private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.getTableToValidate()
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  getTableToValidate(){
    const getHistorySub = this.validateService.getTableToValidate().then((data:any) => {
      console.log(data, 'data from history service') 
      this.users = data
      this.isLoading = false

    }).catch((err) => {
      console.log(err)
    })
  }
  navigateToHistory() {
    this.router.navigate(['/history']);
  }
   
}
