import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './home/container/container.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import {StageComponent} from './stage/stage.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { DemandeComponent } from './demande/demande.component';
import { DetaildemandeComponent } from './detaildemande/detaildemande.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {CarouselModule} from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerComponent,
    HeaderComponent,
    StageComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    DemandeComponent,
    DetaildemandeComponent
  ],
  imports: [
    BrowserModule, CarouselModule.forRoot(),
    AppRoutingModule  , HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
