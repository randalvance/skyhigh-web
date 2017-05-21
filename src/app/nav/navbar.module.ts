import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        MdToolbarModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavModule { }