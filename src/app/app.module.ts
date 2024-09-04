import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { MainslideComponent } from './mainslide/mainslide.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GetintoutchComponent } from './getintoutch/getintoutch.component';
import { FormComponent } from './form/form.component';
import { MapComponent } from './map/map.component';
import { LeaderComponent } from './leader/leader.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    MainslideComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    GetintoutchComponent,
    FormComponent,
    
    MapComponent,
    LeaderComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
