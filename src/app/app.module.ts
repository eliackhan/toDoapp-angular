import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { MockdataService } from './mockdata.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  MainModule,
  FormsModule,
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(MockdataService, {
    delay: 100, // Optional: Add a delay to simulate async responses (in milliseconds)
  }),
  ],
  exports: [
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
