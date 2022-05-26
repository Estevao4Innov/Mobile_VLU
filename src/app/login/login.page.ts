import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private googlePlus: GooglePlus) { }

  ngOnInit() {
  }

  loginGoogle(){
    this.googlePlus.login({})
    .then(user => {
      alert(JSON.stringify(user))
    })
    .catch(error => {
      alert(error)
    })
  }
  loginFacebook(){}


}
