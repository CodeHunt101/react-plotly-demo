'use client'

import dynamic from 'next/dynamic'
import { Layout, PieData } from 'plotly.js'
import { useState } from 'react'

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const PlotlyComponent2 = () => {
  // Dummy data for the pie chart
  const [pieData] = useState<Partial<PieData>[]>([
    {
      type: 'pie',
      labels: ['Apples', 'Bananas', 'Cherries'],
      values: [30, 50, 20],
      hole: 0.4, // Optional: Creates a donut chart
      textinfo: 'label+percent',
      insidetextorientation: 'radial',
      marker: {
        colors: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
      name: 'Fruit Distribution',
    },
  ])

  // Layout configuration for the pie chart
  const layout: Partial<Layout> = {
    // width: 400,
    // height: 400,
    title: { text: 'Fruit Distribution Pie Chart' },
    showlegend: true,
  }

  // // Configuration to show the mode bar on hover
  // const config: Partial<Config> = {
  //   displayModeBar: 'hover', // Show the toolbar on hover
  //   displaylogo: false,      // Optional: Hide the Plotly logo
  //   responsive: true,        // Make the chart responsive
  // }

  return (
      <Plot
        data={pieData}
        layout={layout}
        config={{responsive: true}}
      />
  )
}

export default PlotlyComponent2