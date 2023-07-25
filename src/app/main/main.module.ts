import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MainRoutingModule,
    
  ]
})
export class MainModule { }
