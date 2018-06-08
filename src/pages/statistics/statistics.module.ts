import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticsPage } from './statistics';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    StatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticsPage),
    ChartsModule
  ],
  exports: [
    StatisticsPage
  ]
})
export class StatisticsPageModule {}
