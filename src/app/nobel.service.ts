import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NobelService {
  
  apiURL = 'http://api.nobelprize.org/v1/prize.json';

 constructor(private http:HttpClient) { }

 getAllList(){
  return this.http.get(this.apiURL)
 }
}
