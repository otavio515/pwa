import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { barChartType, barChartOptions, barChartLabels, barChartLegend
	, waterBarChartColors, waterBarChartData, energyBarChartColors, energyBarChartData } from './chart-data';

@IonicPage()
@Component({
	selector: 'page-statistics',
	templateUrl: 'statistics.html'
})

export class StatisticsPage {

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

	constructor() {	}

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}

}