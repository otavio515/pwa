import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvsettingsPage } from './envsettings';
import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EnvsettingsPage,
  ],
  imports: [
    ChartsModule,
    ComponentsModule,
    IonicPageModule.forChild(EnvsettingsPage)
  ],
  exports: [
    EnvsettingsPage
  ]
})
export class EnvsettingsPageModule {}
