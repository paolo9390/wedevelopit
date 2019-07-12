import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './footer/footer.component';
import { NotfoundModule } from './notfound/notfound.module';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HomeModule,
    NotfoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
