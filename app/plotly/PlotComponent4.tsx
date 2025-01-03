'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import dynamic from 'next/dynamic';
import { Config, Data } from 'plotly.js';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })



const PlotlyComponent4 = () => {

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  const data: Data[] = [
    {
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      y: [400, 300, 600, 400, 500],
      type: 'scatter',
      mode: 'lines+markers',
      line: {
        color: 'hsl(var(--chart-1))',
        width: 2
      },
      marker: {
        color: 'hsl(var(--chart-1))',
        size: 8,
        line: {
          color: 'hsl(var(--chart-1))',
          width: 2
        }
      }
    }
  ];

  const layout = {
    // Overall layout
    autosize: true,
    margin: { t: 20, r: 20, l: 40, b: 40 },
    height: 320,
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    
    // Font styling
    font: {
      family: 'inherit',
      size: 12,
      color: 'hsl(var(--foreground))'
    },
    
    // X-axis styling
    xaxis: {
      showgrid: true,
      gridcolor: 'hsl(var(--border) / 0.2)',
      gridwidth: 1,
      tickfont: {
        family: 'inherit',
        size: 12,
        color: 'hsl(var(--foreground))'
      },
      linecolor: 'hsl(var(--border))',
      linewidth: 1
    },
    
    // Y-axis styling
    yaxis: {
      showgrid: true,
      gridcolor: 'hsl(var(--border) / 0.2)',
      gridwidth: 1,
      tickfont: {
        family: 'inherit',
        size: 12,
        color: 'hsl(var(--foreground))'
      },
      linecolor: 'hsl(var(--border))',
      linewidth: 1
    },
    
    // Hover label styling
    hoverlabel: {
      bgcolor: 'hsl(var(--background))',
      bordercolor: 'hsl(var(--border))',
      font: {
        family: 'inherit',
        size: 12,
        color: 'hsl(var(--foreground))'
      }
    }
  };

  const config: Partial<Config> = {
    displayModeBar: 'hover', // Hide the modebar
    responsive: true
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Monthly Performance</CardTitle>
      </CardHeader>
      <CardContent>
      <ChartContainer config={chartConfig}>
          <Plot
            data={data}
            layout={layout}
            config={config}
            className="w-full h-full"
          />
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PlotlyComponent4;