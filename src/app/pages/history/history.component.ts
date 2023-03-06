import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  isLoading: boolean = true
  users:any[]=[]
  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {

    this.historyService.getHistoryData().subscribe(
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


  // getHistoryLogs(){
  //   this.isLoading = true
  //   const getHistorySub = this.historyService.getHistoryLogs().then((data:any) => {
  //     console.log(data, 'get history logs') 
  //     this.users = data
  //     this.isLoading = false

  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }

}
