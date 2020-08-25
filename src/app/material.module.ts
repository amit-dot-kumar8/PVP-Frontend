import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';

  @NgModule({
    imports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatGridListModule,
      MatExpansionModule,
      MatBadgeModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatSidenavModule
    ],
    exports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatGridListModule,
      MatExpansionModule,
      MatBadgeModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatSidenavModule
    ]
  })
  export class MaterialModule {}
