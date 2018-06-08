	// General chart configurations
	export const barChartType: string = 'bar';

	export const barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};

	export const barChartLabels: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

	export const barChartLegend: boolean = true;

	// Chart Color
	export const energyBarChartColors: Array<any> = [{
		backgroundColor: 'rgba(254,242,0,0.9)',
		borderColor: 'rgba(254,242,0,0.9)',
		pointBackgroundColor: 'rgba(254,242,0,0.9)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(254,242,0,0.9)'
	}];

	export const waterBarChartColors: Array<any> = [
		{
		backgroundColor: 'rgba(9,121,214,0.9)',
		borderColor: 'rgba(9,121,214,0.9)',
		pointBackgroundColor: 'rgba(9,121,214,0.9)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(9,121,214,0.9)'
	}];

	// Chart Data
	export const energyBarChartData: any[] = [
		{ data: [1], label: 'Watts' }
	];

	export const waterBarChartData: any[] = [
		{ data: [1], label: 'Liters' }
	];