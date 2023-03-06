import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/services/validate/validate.sevice';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { TableService } from 'src/app/table.service';

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
  percentDone: number = 50
  constructor(
    private router: Router,
    private validateService:ValidateService,
    private tableService:TableService,
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

  download(){

    this.tableService.downloadTable().subscribe(result => {
      console.log(result)
     if (result.type === HttpEventType.DownloadProgress) {
      console.log('hola')
       if (result.total)
        this.percentDone = Math.round(100 * result.loaded / result.total);
       
 
       console.log(this.percentDone);
       
     }
     if (result.type === HttpEventType.Response) {
       const body = result.body;
       if (body !== null) {
         const file = new Blob([body], { type: 'application/zip' });
         const fileURL = URL.createObjectURL(file);
         console.log('hello')
         window.open(fileURL);
       }
     }
    });
 
   
  }
   
}
