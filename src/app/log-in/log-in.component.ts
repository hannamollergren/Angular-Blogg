import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

displayLogOut:boolean;
displayLogin:boolean=true;

loginButton(){
  this.displayLogin=false;
  console.log("Logga in knappen funkar");
  this.displayLogOut=true;
  this.loginService.setValue(true);
}

logOutButton(){
  this.displayLogOut=false;
  this.displayLogin=true;
  this.loginService.setValue(false);
  console.log("I logout button");
  
}

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getValue().subscribe((value)=> {
      this.displayLogOut=value;})
      if (this.displayLogOut==true){
        this.displayLogin=false;
      }

  }

}
