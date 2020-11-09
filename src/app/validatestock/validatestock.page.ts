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
  private currentVegetable = []
  private storageArray = []
  private vegetables
  private Datas: DataProvider
  constructor(private storage:Storage, data: DataProvider) {
    this.Datas = data;
    
    
  }
  ionViewWillEnter(){
    this.currentVegetable = this.Datas.stock[this.currentVegetableIndex]
    this.storage.get("stock").then(getstock => {
      this.storageArray = getstock
    })
    console.log()
    console.log(this.currentVegetable)

  }
  ngOnInit() {
    this.currentVegetableIndex = 0
    this.Datas.loadFromAPI().then(res=>{
      this.storage.set("stock",res)
      this.currentVegetable = this.Datas.stock[this.currentVegetableIndex]
    });
    
  }
  nextVegetable(){
    if(this.currentVegetableIndex>= this.storageArray.length-1){
      this.currentVegetableIndex = 0
    }else
      this.currentVegetableIndex += 1
    this.ionViewWillEnter()
   
  }
  previousVegetable(){
    if(this.currentVegetableIndex <=0){
      this.currentVegetableIndex = this.storageArray.length-1
    }else
      this.currentVegetableIndex -= 1
    this.ionViewWillEnter()
 
  }

  receipt(){

  }
}