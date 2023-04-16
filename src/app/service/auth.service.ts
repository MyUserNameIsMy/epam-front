import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:3005/api/v1/auth';
  registerOperator(registerOperator: any) {
    return this.http.post(this.URL+'/'+'register/operator', registerOperator);
  }
}
