import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  barChartType, barChartOptions, barChartLabels, barChartLegend
  , waterBarChartColors, waterBarChartData, energyBarChartColors, energyBarChartData} from './chart-data';

@IonicPage()
@Component({
  selector: 'page-envsettings',
  templateUrl: 'envsettings.html',
})
export class EnvsettingsPage {

  envName: string;

  // General chart configurations
  public barChartType = barChartType;
  public barChartOptions = barChartOptions;
  public barChartLabels = barChartLabels;
  public barChartLegend = barChartLegend;

  // Chart Color
  public energyBarChartColors = energyBarChartColors;
  public waterBarChartColors = waterBarChartColors;

  // Chart Data
  public energyBarChartData = energyBarChartData;
  public waterBarChartData = waterBarChartData;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserServiceProvider
  ) {
    this.envName = this.navParams.get('environment');
    console.log(this.envName);
  }

  ionViewCanEnter() {
    return this.userService.isTokenValid();
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
