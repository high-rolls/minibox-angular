import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: "",
      password: ""
    });
  }

  ngOnInit() {}

  onSubmit(userData) {
    this.loginForm.reset();

    console.warn("Logging in user...", userData);
  }
}
