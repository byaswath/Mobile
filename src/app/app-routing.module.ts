import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AddmobileComponent } from './addmobile/addmobile.component';
import { ViewmobileComponent } from './viewmobile/viewmobile.component';
import { UpdatemobileComponent } from './updatemobile/updatemobile.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"homepage",component:HomepageComponent},
  {path:"viewlist",component:ViewlistComponent},
  {path:"",redirectTo:"homepage",pathMatch:"full"},
  {path:"addmobile",component:AddmobileComponent},
  {path:"viewmobile/:id",component:ViewmobileComponent},
  {path:"updatemobile/:id",component:UpdatemobileComponent},
  {path:"addtocart",component:AddtocartComponent},
  {path:"cartlist",component:CartlistComponent},
  {path:"search",component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
