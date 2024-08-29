import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile';

@Component({
  selector: 'app-addmobile',
  templateUrl: './addmobile.component.html',
  styleUrls: ['./addmobile.component.css']
})
export class AddmobileComponent {
  constructor(private router:Router,private ms:MobileService){}

  goToView() {
    this.router.navigate(["viewlist"]);
  }
  calculateNetPrice() {
    this.mob.netprice = this.mob.price - (this.mob.price * (this.mob.discount / 100));
  }
  mob:Mobile=new Mobile();
  addNewMobile() {
    this.ms.postOneMobile(this.mob).subscribe((x)=>console.log(x));
    alert("Posted Successfully");
  }

}
