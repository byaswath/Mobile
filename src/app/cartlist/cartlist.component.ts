import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit{
  constructor(private ms:MobileService,private router:Router){}
  mob:Mobile[]=[];
  ngOnInit(): void {
    this.mob=this.ms.getCartItems();
  }

  goToHomePage() {
    this.router.navigate(["homepage"]);
  }

}
