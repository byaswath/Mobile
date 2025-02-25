import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router:Router){}
  goToViewList() {
    this.router.navigate(["viewlist"]);
  }
  cartListButton() {
    this.router.navigate(["cartlist"]);
  }

}
