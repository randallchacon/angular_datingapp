import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ //services are injectable
  providedIn: 'root'
})
export class AccountService { //services are singleton
  //the data that we store inside the service doesn't get destroyed until our app is closed down
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
