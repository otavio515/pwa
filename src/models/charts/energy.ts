import { CharConfiguration } from './chart-configuration';

export class EnergyChart extends CharConfiguration {

  constructor(charData?: Array<{data: number[], label: string}>, description?: string) {
    super();
    this.charData = charData;
    this.description = description;
    this.initChart();
  }

  private initChart(): void {
    if (!this.charData) {
      this.charData = [{data: [0], label: ''}];
    }

    this.barChartColor = [{
      backgroundColor: 'rgba(254,242,0,0.9)',
      borderColor: 'rgba(254,242,0,0.9)',
      pointBackgroundColor: 'rgba(254,242,0,0.9)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(254,242,0,0.9)'
    }];
  }

}
