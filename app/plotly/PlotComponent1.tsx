'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const PlotlyComponent1 = () => {
  // Initialize marker colors state
  const [markerColors, setMarkerColors] = useState(['blue', 'blue', 'blue'])

  // Handler for click events on the plot
  const handlePlotClick = (event: any) => {
    // Check if a point was clicked
    if (event && event.points && event.points.length > 0) {
      const clickedPoint = event.points[0]

      // Ensure the click is on the scatter trace (assuming it's the first trace)
      if (clickedPoint.data.type === 'scatter') {
        const pointIndex = clickedPoint.pointIndex

        // Toggle color between blue and red (you can customize this)
        setMarkerColors((prevColors) =>
          prevColors.map((color, index) =>
            index === pointIndex ? (color === 'blue' ? 'red' : 'blue') : color
          )
        )
      }
    }
  }

  return (
    <Plot
    config={{responsive: true}}
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          line: { shape: 'spline', color: 'red' }, // Line color remains constant
          marker: {
            color: markerColors, // Use state for marker colors
            size: 10,
          },
          name: 'Scatter Plot',
        },
        {
          type: 'bar',
          x: [1, 2, 3],
          y: [2, 5, 3],
          marker: { color: ['blue', 'green', 'orange'] },
          name: 'Bar Chart',
        },
      ]}
      layout={{
        // width: 320 * 2, // 320 * 4
        // height: 240 * 2, // 240 * 4
        title: { text: 'A Fancy Plot' },
        xaxis: {
          showgrid: false,
        },
        yaxis: {
          showgrid: false,
        },
      }}
      onClick={handlePlotClick} // Attach the click handler
    />
  )
}

export default PlotlyComponent1
