import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { ViewmobileComponent } from './viewmobile/viewmobile.component';
import { UpdatemobileComponent } from './updatemobile/updatemobile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { AddmobileComponent } from './addmobile/addmobile.component';
import { HttpClientModule } from '@angular/common/http';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewlistComponent,
    ViewmobileComponent,
    UpdatemobileComponent,
    HomepageComponent,
    AddmobileComponent,
    AddtocartComponent,
    CartlistComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
