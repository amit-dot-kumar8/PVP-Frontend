import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';

  @NgModule({
    imports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatGridListModule,
      MatExpansionModule
    ],
    exports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatGridListModule,
      MatExpansionModule
    ]
  })
  export class MaterialModule {}