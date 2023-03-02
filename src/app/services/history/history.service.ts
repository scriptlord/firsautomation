import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';



@Injectable()
export class HistoryService {
    constructor(private http: HttpClient) { }

    getHistoryLogs() {
        return this.http.get<any>('../../../assets/history.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
    }
   
}