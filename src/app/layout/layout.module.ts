import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdSidenavModule } from '@angular/material';

import { ContainerComponent } from './container/container.component';
import { TopBarComponent } from './topbar/topbar.component';

@NgModule({
    declarations: [
        ContainerComponent,
        TopBarComponent
    ],
    imports: [
        BrowserModule,
        MdToolbarModule,
        MdSidenavModule
    ],
    exports: [
        ContainerComponent
    ]
})
export class LayoutModule { }