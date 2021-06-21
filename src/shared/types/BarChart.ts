interface BarChartProps {
  labels: string[];
  datasets: Dataset[];
}

export interface Dataset {
  data: any[];
  colors?: Array<(opacity: number) => string>;
   
}

export default BarChartProps

