import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/data';
import { Router } from '@angular/router';

import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  private Datas: DataProvider;
  constructor(data:DataProvider, private router : Router) {
    this.Datas = data;
    
  }

  ngOnInit() {
    this.Datas.loadFromAPI();
   
  }
  details(product){
    this.router.navigateByUrl("details/",product)
  }

}


