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
    this.getHistoryLogs()
  }


  getHistoryLogs(){
    this.isLoading = true
    const getHistorySub = this.historyService.getHistoryLogs().then((data:any) => {
      console.log(data, 'get history logs') 
      this.users = data
      this.isLoading = false

    }).catch((err) => {
      console.log(err)
    })
  }

}
