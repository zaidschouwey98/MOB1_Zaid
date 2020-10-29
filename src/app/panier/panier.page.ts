import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../providers/data';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {
  private basket;
  private vegetables;
  private array;

  constructor(private storage : Storage, data : DataProvider) {
    data.loadFromAPI().then(res => {
      this.vegetables = res;
    });    
  }
  
  ionViewWillEnter(){
    this.storage.get("basket").then(getBasket => {
      this.basket = getBasket;
      // this.array.difference(this.basket, this.vegetables);
    })
   
    
  }

  getAvailableProducts() {
    if(this.basket && this.vegetables) {
      return this.vegetables.filter(product => {
        const productIdx = this.basket.findIndex(item => item.id === product.id)

        return productIdx === -1
      })
    } 

    return []
  }

  addVegetableToBasket($event){
    const item = this.vegetables.find(product => product.id === Number($event.detail.value))
    this.basket.push(item)
  }

}
