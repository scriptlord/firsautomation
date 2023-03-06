import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate/validate.sevice';

import { TableService } from 'src/app/table.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  isLoading: boolean = true;
  users: any = [];
  tables: any = [];
  uploadLabel:string = 'Upload';
  
 
  isUpLoading:boolean=false;
  
  percentDone: number = 0;
  progress = 0;
  progressMessage = '';
  progressTotal = 500;
  

  constructor(private validateService: ValidateService, private tableService:TableService) { }

  ngOnInit(): void {

    this.tableService.getTables().subscribe(
      response => {
        console.log(response);
        this.users = response;
        this.isLoading = false;
      },
      error => {
        console.log('Error:', error);
        this.isLoading = false;
      }
    );
   

    
  }


  getTableToUpload(){
    this.isLoading = true
    const getTableSub = this.validateService.getTableToValidate().then((data:any) => {
      console.log(data, 'data from history service') 
      this.users = data
      this.isLoading = false

    }).catch((err) => {
      console.log(err)
    })
  }

  startUpload() {
    this.isUpLoading = true
    this.uploadLabel = 'Uploading...'
    const progressInterval = setInterval(() => {
      if (this.progress >= this.progressTotal) {
        clearInterval(progressInterval);
        this.progressMessage = 'Upload completed';
        this.isUpLoading = false;

        setTimeout(() => {
          this.progress = 0;
          this.progressMessage = '';
          this.uploadLabel = 'Upload'
        }, 2000);
        return;
      }
      this.progress += 1;
      // this.progressMessage = `Uploading ${this.progress} of ${this.progressTotal}`;
      this.percentDone = Math.round(100 * this.progress / this.progressTotal);
     

    }, 10);

  }

 
 




}
