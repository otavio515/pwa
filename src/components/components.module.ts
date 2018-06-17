import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
	declarations: [UserMenuComponent,
    CustomHeaderComponent,
    UserInfoComponent,
    ChartComponent],
	imports: [
    ChartsModule,
    IonicModule
  ],
	exports: [UserMenuComponent,
    CustomHeaderComponent,
    UserInfoComponent,
    ChartComponent]
})
export class ComponentsModule {}
