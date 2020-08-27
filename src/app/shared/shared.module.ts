import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Epo components */
import { PvpDropdownComponent } from './components/pvp-dropdown/pvp-dropdown.component';


/* Epo components exports (active in npm package) */
export { PvpDropdownComponent } from './components/pvp-dropdown/pvp-dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        PvpDropdownComponent
    ],
    exports: [
        PvpDropdownComponent
    ]
})
export class SharedModule { }
