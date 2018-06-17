export interface Chart {
  getBarChartColors(): Array<any>;
  setBarChartColors(barChartColor: Array<any>): void;

  getBarChartData(): any[];
  setBarChartData(charData: any[]): void;

  getBarChartType(): string;
  setBarChartType(charType: string): void;

  getBarChartLabels(): string[];
  setBarChartLabels(chartLabel: string[]): void;

  getBarChartLegend(): boolean;
  setBarChartLegend(hasChartLegend: boolean): void;

  getBarChartOptions(): any;
  setBarChartOptions(chartOptions: any): void;

  getDescription(): string;
  setDescription(description: string): void;
}

export abstract class CharConfiguration implements Chart {

  protected barChartType: string = 'bar';
  protected barChartLabels: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  protected barChartLegend: boolean = true;
  protected barChartColor: Array<any> = [{}];
  protected charData: any[];
  protected description: string;

  protected barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  getBarChartType(): string {
    return this.barChartType;
  }
  setBarChartType(charType: string): void {
    this.barChartType = charType;
  }
  getBarChartLabels(): string[] {
    return this.barChartLabels;
  }
  setBarChartLabels(chartLabel: string[]): void {
    this.barChartLabels = chartLabel;
  }
  getBarChartLegend(): boolean {
    return this.barChartLegend;
  }
  setBarChartLegend(hasChartLegend: boolean): void {
    this.barChartLegend = hasChartLegend;
  }
  getBarChartOptions() {
    return this.barChartOptions;
  }
  setBarChartOptions(chartOptions: any): void {
    this.barChartOptions = chartOptions;
  }
  getBarChartColors(): any[] {
    return this.barChartColor;
  }
  setBarChartColors(barChartColor: any[]): void {
    this.barChartColor = barChartColor;
  }
  getBarChartData(): any[] {
    return this.charData;
  }
  setBarChartData(chartData: any[]): void {
    this.charData = chartData;
  }
  getDescription(): string {
    return this.description;
  }
  setDescription(description: string): void {
    this.description = description;
  }
}
