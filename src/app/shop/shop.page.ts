import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  Alldatas: any;
  private Datas: DataProvider;
  constructor(data:DataProvider) {
    this.Datas = data;
    this.Alldatas = this.Datas.stock;
  }

  ngOnInit() {
    this.Alldatas = this.Datas.loadFromAPI();
    this.Alldatas = this.Datas.stock;
  }

  all(){
    this.Alldatas = this.Datas.stock;
  }
  

}


