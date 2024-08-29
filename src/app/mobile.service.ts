import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from './mobile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private router:Router,private http:HttpClient) { }
  baseUrl = "http://localhost:8080";

  getAllMobile() {
    return this.http.get<Mobile[]> (`${this.baseUrl}/getAllMobileDetails`);
  }

  getById(id:number) {
    return this.http.get<Mobile> (`${this.baseUrl}/getOneMobileDetail/${id}`);
  }

  updateById(id:number,mob:Mobile) {
    return this.http.put<Mobile> (`${this.baseUrl}/updateIdPut/${id}`,mob);
  }
  postOneMobile(mob:Mobile):Observable<Mobile> {
    return this.http.post<Mobile> (`${this.baseUrl}/postOneMobileDetail`,mob);
  }

  // private mobiles: Mobile[] = []; 
  private cart: Mobile[] = []; 

  addToCart(mobile: Mobile) {
    this.cart.push(mobile);
  }

  // Method to get cart items
  getCartItems() {
    return this.cart;
  }


}
