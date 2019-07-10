import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ContactComponent } from './view/contact/contact.component';
import { AboutComponent } from './about/about.component';
import { JobComponent } from './view//job/job.component';
import { CategoryComponent } from './view/category/category.component';


//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule
  , MatMenuModule
  , MatToolbarModule
  , MatCardModule
  , MatIconModule
  , MatButtonModule
  , MatFormFieldModule
  , MatListModule
  , MatTabsModule
  , MatGridListModule
  , MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    JobComponent,
    CategoryComponent,

    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    CategoryCardComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
