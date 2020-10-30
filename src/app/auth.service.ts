import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable()
export class AuthService {
  apiUrl = "http://localhost:8000/";
  authUrl = this.apiUrl + "api-auth/";
  loginUrl = this.authUrl + "login/";

  constructor(private http: HttpClient) {}

  login(formData) {
    return this.http.post(this.loginUrl, formData, httpOptions);
  }
}
