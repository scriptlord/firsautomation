import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  private url = 'api/tables';

  
  constructor(private http: HttpClient) { }
  getTables(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  downloadTable(): Observable<HttpEvent<Blob>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.url, {
      headers,
      observe: 'events',
      responseType: 'blob',
      reportProgress: true
    });
  }

  

  
}
