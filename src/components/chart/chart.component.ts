import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

import { Chart } from './../../models/charts/chart-configuration';

@Component({
  selector: 'chart',
  templateUrl: 'chart.component.html'
})
export class ChartComponent {

  @Input() chart: Chart;
  @Input() icon: string;

  @ViewChild(BaseChartDirective) public chartDirective: BaseChartDirective;

  constructor() { }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public updateCharts(): void {
    this.chartDirective.ngOnChanges({} as SimpleChanges);
  }

}
