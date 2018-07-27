import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule]
})
export class MaterialModule {} 