// src/app/login.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  account = { email: '', password: '' };
  
  constructor( private userService: UserService,
               private toastCtrl: ToastController,
               public router: Router ) { }

  ngOnInit() {
  }

  doLogin()  {
    if ((this.account.email != '') && (this.account.password != '')) {
      this.userService.signin(this.account.email, this.account.password)
        .then(data => {
          console.log(data);
          console.log("success je suis la ");
          this.presentToast("Success.");
          this.router.navigateByUrl('/list');
        })
        .catch(error => {
          console.log(error);
          console.log("erreur");
          this.presentToast(error.message);
        });
    } else {
      this.presentToast("Email & password are required.");
      return false;
    }
    return '';  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  gotoSignup() {
    this.router.navigateByUrl('/signup');
  }

}