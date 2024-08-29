import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile';

@Component({
  selector: 'app-updatemobile',
  templateUrl: './updatemobile.component.html',
  styleUrls: ['./updatemobile.component.css']
})
export class UpdatemobileComponent implements OnInit{
  constructor(private router:Router,private ms:MobileService,private ar:ActivatedRoute){}

  goToViewPage() {
    this.router.navigate(["viewlist"]);
  }
  mob:Mobile=new Mobile();
  id:number;
  ngOnInit(): void {
    this.id =this.ar.snapshot.params["id"];
    this.ms.getById(this.id).subscribe((x)=>{this.mob=x});
  }

  calculateNetPrice() {
    this.mob.netprice = this.mob.price - (this.mob.price * (this.mob.discount / 100));
  }

  submitMobile() {
    this.ms.updateById(this.id,this.mob).subscribe((x)=>console.log(x));
    alert("Updated Successfully");
    this.goToViewPage();
  }
}
