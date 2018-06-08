import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ControlsPage } from './controls';

@NgModule({
  declarations: [
    ControlsPage,
  ],
  imports: [
    IonicPageModule.forChild(ControlsPage),
  ],
  exports: [
    ControlsPage
  ]
})
export class ControlsPageModule {}
