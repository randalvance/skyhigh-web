import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreStoreModule } from './stores';

import { SharedModule } from './shared';
import { EnrollmentModule } from './enrollment';
import { StudentsModule } from './students';
import { ProfessorsModule } from './professors';
import { SubjectsModule } from './subjects';

import { AppComponent } from './app.component';
import { Four04Component, WelcomeComponent } from './components';
import { HeaderComponent, HamburgerComponent, SidebarComponent, SidebarItemComponent } from './layout';

import { ConfigurationService } from './shared/services';

import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    Four04Component,
    HamburgerComponent,
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
    SubjectsModule,
    
    appRouting
  ],
  providers: [
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
