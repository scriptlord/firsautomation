import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate/validate.sevice';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  isLoading: boolean = false
  users: any = []

  constructor(private validateService: ValidateService) { }

  ngOnInit(): void {
    this.getTableToUpload()
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

}
