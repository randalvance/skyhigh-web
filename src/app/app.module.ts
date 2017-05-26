import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreStoreModule } from './stores';

import { SharedModule } from './shared';
import { EnrollmentModule } from './enrollment';
import { StudentsModule } from './students';
import { ProfessorsModule } from './professors';

import { AppComponent } from './app.component';
import { Four04Component, WelcomeComponent } from './components';
import { HeaderComponent, SidebarComponent, SidebarItemComponent } from './layout';

import { ConfigurationService } from './shared/services';

import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    Four04Component,
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreStoreModule,

    SharedModule,
    EnrollmentModule,
    StudentsModule,
    ProfessorsModule,

    appRouting
  ],
  providers: [
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
