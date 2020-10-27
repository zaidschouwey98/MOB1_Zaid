import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  firstname : String
  lastname : String
  phone : String
  constructor(private storage: Storage) { }
  ngOnInit() {
    this.storage.get("firstname").then((val)=>{
      this.firstname = val;
    });
    this.storage.get("lastname").then((val)=>{
      this.lastname = val;
    });
    this.storage.get("phone").then((val)=>{
      this.phone = val;
    });
   
    
  }

}
