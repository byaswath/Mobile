import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile';

@Component({
  selector: 'app-viewmobile',
  templateUrl: './viewmobile.component.html',
  styleUrls: ['./viewmobile.component.css']
})
export class ViewmobileComponent implements OnInit{
  constructor(private router:Router,private ms:MobileService,private ar:ActivatedRoute){}
  
  goToViewList() {
    this.router.navigate(["viewlist"]);
  }
  mob:Mobile=new Mobile();
  id:number;
  ngOnInit(): void {
    this.id=this.ar.snapshot.params["id"];
    this.ms.getById(this.id).subscribe((x)=>{this.mob=x});
  }


}
