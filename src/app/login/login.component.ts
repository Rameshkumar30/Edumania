import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit() { }

  public loginSelector="container";
  onupClick(){
    this.loginSelector="container right-panel-active";
  }
  oninClick(){
    this.loginSelector="container";
  }
}
