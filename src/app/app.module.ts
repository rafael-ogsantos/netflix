import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { from } from 'rxjs';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { ListTitlessComponent } from './shared/list-titless/list-titless.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TitleComponent } from './shared/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlessComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
