import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule]
})
export class MaterialModule {} 