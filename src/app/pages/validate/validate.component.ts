import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate/validate.sevice';
import { TableService } from 'src/app/table.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  isLoading: boolean = true;
  initialHeight: string = '200px'
  users: any = [];
  constructor(
    private validateService: ValidateService,
    private tableService: TableService
  ) { }

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


  // getTableToValidate(){
  //   this.isLoading = true
  //   const getHistorySub = this.validateService.getTableToValidate().then((data:any) => {
  //     console.log(data, 'data from history service') 
  //     this.users = data
  //     this.isLoading = false

  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
}
