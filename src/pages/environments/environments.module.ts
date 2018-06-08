import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvironmentsPage } from './environments';

@NgModule({
  declarations: [
    EnvironmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnvironmentsPage),
  ],
  exports: [
    EnvironmentsPage
  ]
})
export class EnvironmentsPageModule {}
