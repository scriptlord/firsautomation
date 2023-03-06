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
  downloadLabel:string = 'Download'
  dateValue!:string
  isLoading:boolean=false
  isDownloadLoading:boolean=false
  newDateValue!:string
  percentDone: number = 0
  progress = 0;
  progressMessage = '';
  progressTotal = 500;
 
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
  // delayedDownload() {
  //   // Set a delay of one minute (60 seconds)
  //   const delay = 2000;
  
  //   // Show a message to the user indicating that the download will start in one minute
  //   console.log(`Download will start in ${delay / 1000} seconds...`);
  
  //   // Wait for the specified delay using a Promise
  //   return new Promise(resolve => setTimeout(resolve, delay))
  //     .then(() => {
  //       // Call the download function after the delay has passed
  //       this.download();
  //     });
  // }
  

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

  startDownload() {
    this.isDownloadLoading = true
    this.downloadLabel = 'Downloading...'
    const progressInterval = setInterval(() => {
      if (this.progress >= this.progressTotal) {
        clearInterval(progressInterval);
        this.progressMessage = 'Download completed';
        this.isDownloadLoading = false;

        setTimeout(() => {
          this.progress = 0;
          this.progressMessage = '';
          this.downloadLabel = 'Download'
        }, 2000);
        return;
      }
      this.progress += 1;
      this.progressMessage = `Downloading ${this.progress} of ${this.progressTotal}`;
      this.percentDone = Math.round(100 * this.progress / this.progressTotal);
     

    }, 10);

  }

}
