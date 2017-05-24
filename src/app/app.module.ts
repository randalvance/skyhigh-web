import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdCardModule, MdIconModule, MdSidenavModule, MdToolbarModule } from '@angular/material';

import { CoreStoreModule } from './store';

import { AppComponent } from './app.component';
import { HeaderComponent, NavigationComponent, WelcomeComponent } from './components';

import { ConfigurationService } from './shared/services';

import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreStoreModule,

    MdCardModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,

    appRouting
  ],
  providers: [
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
