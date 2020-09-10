import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../providers/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private firstname: String ;
  private lastname: String ;
  private phone: String ;
  private token: String ;
  private Datas: DataProvider;
  constructor(private router: Router, private toaster: ToastController, private storage: Storage, dataprovider: DataProvider) { this.Datas = dataprovider; }

  ngOnInit() {
  }
  addUser(){
    if(this.firstname == null || this.lastname == null || this.phone == null || this.phone == "" || this.firstname == "" || this.lastname == ""){
      //toast
      this.toaster.create({
        message: "Champs vide, veillez recontroller votre saisie.",
        duration: 2000,
      }).then(toast => {
        toast.present();
      });
    }else{
      //create user
      this.storage.set('firstname', this.firstname);
      this.storage.set('lastname', this.lastname);
      this.storage.set('phone', this.phone);

      //toast
      this.toaster.create({
        message: "Bienvenue "+this.firstname+" "+this.lastname+", votre compte a bien été créé",
        duration: 2000,
      }).then(toast => {
        toast.present();
      });
    }
  }

  addToken(){
    this.storage.set('token', this.token);
    console.log('tokenok');
  }

}
