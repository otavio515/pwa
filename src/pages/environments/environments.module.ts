import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvironmentsPage } from './environments';

@NgModule({
  declarations: [
    EnvironmentsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EnvironmentsPage),
  ],
  exports: [
    EnvironmentsPage
  ]
})
export class EnvironmentsPageModule {}
