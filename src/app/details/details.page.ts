import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements  OnInit {
  private value;
  private number : Number;
  
  constructor(private route: ActivatedRoute,private router: Router, private storage:Storage) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras) {
        this.value = this.router.getCurrentNavigation().extras;
      }
    });
  }

  ngOnInit() {
   
  }

  addToBasket(val : string,num){
    this.storage.set(val,num);
  }

}
