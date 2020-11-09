import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-validatestock',
  templateUrl: './validatestock.page.html',
  styleUrls: ['./validatestock.page.scss'],
})
export class ValidatestockPage implements OnInit {
  private isSummary :boolean
  private currentVegetableIndex
  private currentVegetable = []
  private storageArray = []
  private vegetables
  private validatedVegetables = []
  private compactValidVegetables = []
  private Datas: DataProvider
  constructor(private storage:Storage, data: DataProvider) {
    this.Datas = data;
    
    
  }
  ionViewWillEnter(){
    
    this.storage.get("stock").then(getstock => {
      this.storageArray = getstock
      this.currentVegetable = this.storageArray[this.currentVegetableIndex]
    })
    

  }
  ngOnInit() {
    this.isSummary = false;
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

  validate(){
    this.validatedVegetables.push(this.currentVegetable)
    console.log(this.currentVegetableIndex)
    this.storageArray.splice(this.currentVegetableIndex,1)
    this.storage.set("stock",this.storageArray).then(res =>{
      
      if(this.currentVegetableIndex <=0){

      }else
        this.currentVegetableIndex -=1
    
      console.log(this.currentVegetableIndex)
      if(this.storageArray.length <=0)
        this.summary()
      else
        this.ionViewWillEnter()
    })
    
  }

  summary(){
    this.isSummary = true;
    this.ionViewWillEnter()
  }
  save(){
    this.validatedVegetables.forEach(element => {
      this.compactValidVegetables.push(element)
    });
  
  }
  restart(){
    this.validatedVegetables = []
    this.isSummary = false
    this.Datas.loadFromAPI().then(res=>{
      this.storage.set("stock",res)
      this.currentVegetable = this.Datas.stock[this.currentVegetableIndex]
      this.ionViewWillEnter()
    });
    
  }
}
