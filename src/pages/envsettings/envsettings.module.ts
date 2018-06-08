import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvsettingsPage } from './envsettings';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    EnvsettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnvsettingsPage),
    ChartsModule
  ],
  exports: [
    EnvsettingsPage
  ]
})
export class EnvsettingsPageModule {}
