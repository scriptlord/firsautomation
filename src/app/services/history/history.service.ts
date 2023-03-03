import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';



@Injectable()
export class HistoryService {

    private url = 'api/historyData';
    constructor(private http: HttpClient) { }

    getHistoryData(): Observable<any> {
        return this.http.get<any>(this.url);
      
    }

    // getHistoryLogs() {
    //     return this.http.get<any>('../../../assets/history.json')
    //     .toPromise()
    //     .then(res => <any[]>res.data)
    //     .then(data => { return data; });
    // }
   
}