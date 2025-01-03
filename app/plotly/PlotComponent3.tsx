'use client'

import dynamic from 'next/dynamic'
import {  Data, Layout } from 'plotly.js'
import { useState } from 'react'

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const PlotlyComponent3 = () => {
  // Define the three traces as per your specifications
  const [plotData] = useState<Data[]>([
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers',
      type: 'scatter',
      name: 'Markers',
      marker: { color: 'blue', size: 12 },
    },
    {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      type: 'scatter',
      name: 'Lines',
      line: { color: 'green', width: 2 },
    },
    {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      type: 'scatter',
      name: 'Lines+Markers',
      line: { color: 'red', width: 2 },
      marker: { color: 'orange', size: 8 },
    },
  ])

  // Layout configuration for the plot
  const layout: Partial<Layout> = {
    width: 600,
    height: 400,
    title: { text: 'Multiple Traces Scatter and Line Chart' },
    xaxis: {
      title: 'X Axis',
      showgrid: true,
      zeroline: false,
    },
    yaxis: {
      title: 'Y Axis',
      showgrid: true,
      zeroline: false,
    },
    showlegend: true,
    hovermode: 'closest',
  }

  return (
    <div className="flex justify-center items-center my-8">
      <Plot
        data={plotData}
        layout={layout}
        config={{responsive: true}} // Updated configuration
      />
    </div>
  )
}

export default PlotlyComponent3
