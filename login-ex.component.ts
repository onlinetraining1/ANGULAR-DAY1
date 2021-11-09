import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-ex',
  templateUrl: './login-ex.component.html',
  styleUrls: ['./login-ex.component.css']
})
export class LoginExComponent implements OnInit {
uname:string="";
pword:string="";
message:string="";
  constructor() { }

  ngOnInit(): void {
  }
  check()
  {
    if(this.uname=="sai" && this.pword=="ram")
      this.message="Login Success";
    else
      this.message="Login Failure";
  }
}
