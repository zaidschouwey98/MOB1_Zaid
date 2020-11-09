import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { promise } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements  OnInit {
  private value;
  private basketArray = [];
  private currentItem;
  private index;


  
  constructor(private route: ActivatedRoute,private router: Router, private storage:Storage) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras) {
        this.value = this.router.getCurrentNavigation().extras;
      }
    });
  }

  ngOnInit() {
 
    this.storage.get('basket').then(getBasket => {
      //le local storage 'basket' existe
      if(getBasket){
        this.basketArray = getBasket
        this.basketArray.forEach(element => {
          // this.total += element.price;
        });
      //le local storage 'basket' n'existe pas (le crée)
      }else{
        
        this.storage.set('basket', this.basketArray).then();
      }      
    });
  }

  addToBasket(){
    if(this.basketArray && this.basketArray.length !== 0){
      const elementIdx = this.basketArray.findIndex(element => element.id === this.value.id)
      if(elementIdx >= 0) {
        this.basketArray[elementIdx] = this.value
      } else {
        this.basketArray.push(this.value)
      }
      this.storage.set("basket", this.basketArray).then(val => {
        if(val)
          this.basketArray = val;
      });
    }    
  }

}
