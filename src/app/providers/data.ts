import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {reject, resolve} from 'q';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {
  
  private apiurl = "http://127.0.0.1:8000/api";

  public stock = []
  public user = []
  public errorMessage;
 

  constructor(private http: HttpClient, private storage: Storage){}

  public loadFromAPI(): Promise<any>
  {
    return new Promise<any> ( (resolve, reject) => {
      this.http.get(this.apiurl+'/products').subscribe(
        response => {
          this.stock = response['data'];
          resolve(this.stock)
        },
        err => {
          console.log('API failed with code '+err.status)
          reject(err)
        }
      )
    })
  }
  public registerToAPI(firstname,lastname,phonenumber){
    
    return this.http.post(this.apiurl+"/user/apply", {
      firstname,
      lastname,
      phonenumber
    })
    
  }
  public saveToStock(quantities){
    
    return this.http.post(this.apiurl+"/products/stock", {
      quantities
    })
    
  }
}