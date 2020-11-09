import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-validatestock',
  templateUrl: './validatestock.page.html',
  styleUrls: ['./validatestock.page.scss'],
})
export class ValidatestockPage implements OnInit {
  private currentVegetableIndex
  private currentVegetable
  private vegetables
  private Datas: DataProvider
  constructor(private storage:Storage, data: DataProvider) {
    this.Datas = data;
    
    
  }
  ionViewWillEnter(){
    
    this.currentVegetable = this.Datas.stock[this.currentVegetableIndex]
    console.log(this.currentVegetable)
  }
  ngOnInit() {
    this.currentVegetableIndex = 0
    this.Datas.loadFromAPI().then(res=>{
      this.storage.set("stock",this.Datas.stock)
    });
    
  }
  nextVegetable(){
    this.currentVegetableIndex += 1
  }
  previousVegetable(){
    this.currentVegetableIndex -= 1
  }

  receipt(){

  }
}
