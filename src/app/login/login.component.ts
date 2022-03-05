import { Component, OnInit } from '@angular/core';
import {ApiService} from '../Api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService,private route:Router) { }

  username: string = "";
  email: string = "";
  password: string = "";
  password2: string = "";

  emailLogin: string = "";
  passwordLogin: string = "";

  boolMsg: boolean = false;
  boolMsgLogin : boolean = false;
  convertData:any;
  convertDataLogin:any;

  ngOnInit(): void {
  }
  ngOnChange(){
    console.log(this.username)
  }

  loginUser(){
    const dataToSend = {
      email: this.emailLogin,
      password: this.passwordLogin,
    }

    let jsonTosend = JSON.stringify(dataToSend);
    console.log(jsonTosend)
    this.api.loginUser(jsonTosend).subscribe((data)=> {
      this.convertDataLogin = JSON.parse(data)
      console.log(this.convertDataLogin)
      if(this.convertDataLogin.userIsLogin == 1){
        this.boolMsgLogin = true;
        setTimeout(() => {
          this.boolMsgLogin = false;
        this.route.navigate(['/home']);
        }, 2000);
      }else{
        this.boolMsgLogin = true;
        setTimeout(() => {
          this.boolMsgLogin = false;
        }, 2000);
      }
   },error => {
      console.log('error: ', error)
   });
  }

  newUser(){
    const dataToSend = {
      username: this.username,
      email: this.email,
      password: this.password,
      password2: this.password2
    }

    let jsonTosend = JSON.stringify(dataToSend);
    this.api.newUser(jsonTosend).subscribe((data)=> {
      this.convertData = JSON.parse(data)
      if(this.convertData.createNewUser == 1){
        this.boolMsg = true;
        setTimeout(() => {
          this.boolMsg = false;
        }, 2000);
        this.passwordLogin = this.password;
        this.emailLogin = this.email
        this.username = "";
        this.email = "";
        this.password = "";
        this.password2 = "";
      }else{
        this.boolMsg = true;
        setTimeout(() => {
          this.boolMsg = false;
        }, 2000);
      }
   },error => {
      console.log('error: ', error)
   });
  }

}
