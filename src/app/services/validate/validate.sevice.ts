import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';



@Injectable()
export class ValidateService {
    constructor(private http: HttpClient) { }

    getTableToValidate() {
        return this.http.get<any>('../../../assets/tabletovalidate.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
    }
   
}