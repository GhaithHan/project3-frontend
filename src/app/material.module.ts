import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule, MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule, MatCardModule]
})
export class MaterialModule {} 