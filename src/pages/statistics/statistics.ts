import { ChartComponent } from './../../components/chart/chart.component';
import { Component, ViewChildren } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { WaterChart } from './../../models/charts/water';
import { EnergyChart } from './../../models/charts/energy';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { StatisticsService } from '../../providers/statistics-service/statistics.service';
import { Statistics } from '../../models/statistics';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html'
})

export class StatisticsPage {

  @ViewChildren(ChartComponent) chartComponent: any[];

  energyChart: EnergyChart = new EnergyChart();
  waterChart: WaterChart = new WaterChart();

  date: Date = new Date();
  year: string;
  years: string[] = [];

  constructor(
    public userService: UserServiceProvider,
    public statisticsService: StatisticsService,
    public screenOrientation: ScreenOrientation,
    public platform: Platform
  ) { }

  ionViewCanEnter() {
    return this.userService.isTokenValid();
  }

  ionViewWillEnter() {
    if (!this.platform.is('core') && !this.platform.is('mobileweb')) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
  }

  ionViewWillLeave() {
    if (!this.platform.is('core') && !this.platform.is('mobileweb')) {
      this.screenOrientation.unlock();
    }
  }

  ionViewDidLoad() {
    this.loadFilter();
    this.initCharts();
    this.doFilter();
  }

  doFilter() {
    this.statisticsService.getAllStatisticsByData(this.year)
      .subscribe((statistics: Statistics[]) => {
        this.cleanData();
        let index: number = 0;
        let total: Statistics[] = statistics['statisticsTotal'];
        for (let i = 1; i <= 12; i++) {
          if ((index < total.length) && (i == total[index].month)) {
            this.energyChart.getBarChartData()[0].data.push(total[index].tenergy);
            this.waterChart.getBarChartData()[0].data.push(total[index].twater);
            index++;
          } else {
            this.energyChart.getBarChartData()[0].data.push(0);
            this.waterChart.getBarChartData()[0].data.push(0);
          }
        }

        this.chartComponent.forEach(chart => {
          chart.updateCharts();
        });
      },
        (error) => { })
  }

  private loadFilter(): void {
    for (let i = 0; i < 5; i++) {
      this.years.push((this.date.getUTCFullYear() - i).toString());
    }
    this.year = this.years[0];
  }

  private initCharts(): void {
    this.energyChart = new EnergyChart(
      [{ data: [], label: 'Energy' }],
      'Consumo de Energia'
    );

    this.waterChart = new WaterChart(
      [{ data: [], label: 'Water' }],
      'Consumo de Água'
    );
  }

  private cleanData(): void {
    this.energyChart.getBarChartData()[0].data = [];
    this.waterChart.getBarChartData()[0].data = [];
  }
}
