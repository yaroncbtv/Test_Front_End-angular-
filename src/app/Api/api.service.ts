import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "https://localhost:44351/";

  constructor (private http:HttpClient) {}

  getCountries(){
     return this.http.get<any>('https://api.publicapis.org/entries')
  }

  newUser(body:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
  });
    return this.http.post<any>(`${this.baseURL}test/NewUser`, body, {headers: headers})
 }

 loginUser(body:string){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
});
  return this.http.post<any>(`${this.baseURL}test/LoginUser`, body, {headers: headers})
}
}
