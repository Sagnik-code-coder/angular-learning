import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private http: HttpClient) { }
  getUser1(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
