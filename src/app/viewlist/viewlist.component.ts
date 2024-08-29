import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit{
  mob:Mobile[]=[];
  constructor(private router:Router,private ms:MobileService){}
  
  goToHomePage() {
    this.router.navigate(["homepage"]);
  }

  viewAllMobile() {
    this.ms.getAllMobile().subscribe((x)=>{this.mob=x});
  }
  ngOnInit(): void {
    this.viewAllMobile();
  }

  goToViewMobile(id:number) {
    this.router.navigate(["viewmobile",id]);
  }

  goToUpdatePage(id:number) {
    this.router.navigate(["updatemobile",id]);
  }

  addMobile() {
    this.router.navigate(["addmobile"]);
  }

  
  addToCart(mobile: Mobile) {
    this.ms.addToCart(mobile);
    alert(`${mobile.brand} added to cart!`);
  }

}
