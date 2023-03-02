import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate/validate.sevice';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  isLoading: boolean = false
  users: any = []
  constructor(
    private validateService: ValidateService
  ) { }

  ngOnInit(): void {
    this.getTableToValidate()
  }


  getTableToValidate(){
    this.isLoading = true
    const getHistorySub = this.validateService.getTableToValidate().then((data:any) => {
      console.log(data, 'data from history service') 
      this.users = data
      this.isLoading = false

    }).catch((err) => {
      console.log(err)
    })
  }
}
