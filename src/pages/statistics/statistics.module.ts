import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticsPage } from './statistics';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    StatisticsPage,
  ],
  imports: [
    ChartsModule,
    ComponentsModule,
    IonicPageModule.forChild(StatisticsPage),
  ],
  exports: [
    StatisticsPage
  ]
})
export class StatisticsPageModule {}
