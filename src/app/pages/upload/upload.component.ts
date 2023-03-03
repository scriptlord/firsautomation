import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate/validate.sevice';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { TableService } from 'src/app/table.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  isLoading: boolean = false
  users: any = []
  tables: any = []
  percentDone: number = 50

  constructor(private validateService: ValidateService, private tableService:TableService) { }

  ngOnInit(): void {

    this.tableService.getTables().subscribe(
      response => {
        console.log(response);
        this.users = response;
      },
      error => {
        console.log('Error:', error);
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
