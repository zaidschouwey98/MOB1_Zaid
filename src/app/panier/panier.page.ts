import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {
  private basket;
  constructor(private storage : Storage) {
    
    
  }

  
  ionViewWillEnter(){
    this.storage.get("basket").then(getBasket => {
      this.basket = getBasket;
      console.log(this.basket);
    })
  }

}
