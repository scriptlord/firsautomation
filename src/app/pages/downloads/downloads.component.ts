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
  downloadLabel:string = 'Download'
  dateValue!:string
  isLoading:boolean=false
  isDownloadLoading:boolean=false
  newDateValue!:string
  progress = 0;
  progressMessage = '';
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



  startDownload() {
    this.isDownloadLoading = true
    this.downloadLabel = 'Downloading...'
    const progressInterval = setInterval(() => {
      if (this.progress >= 500) {
        clearInterval(progressInterval);
        this.progressMessage = 'Download completed';
        this.isDownloadLoading = false

        setTimeout(() => {
          this.progress = 0;
          this.progressMessage = '';
          this.downloadLabel = 'Download'
        }, 2000);
        return;
      }
      this.progress += 1;
      this.progressMessage = `Downloading ${this.progress} of 500`;
    }, 10);

  }
   
}
