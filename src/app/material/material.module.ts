import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatRadioModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatRadioModule, MatSidenavModule, MatListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatRadioModule, MatSidenavModule, MatListModule],
})

export class MaterialModule { }