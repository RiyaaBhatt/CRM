import React from 'react'
import Sidebar2 from '../../components/Dashboard/Sidebar2'
import BarChart from '../../components/graph/BarChart'
import BubbleChart from '../../components/graph/BubbleChart'
import DoughnutChart from '../../components/graph/DoughnutChart'
import LineChart from '../../components/graph/LineChart'
import PieChart from '../../components/graph/PieChart'
import RadarChart from '../../components/graph/RadarChart'
const analytics = () => {
  const chartStyle = {
    flex: '1 1 30%',
    maxWidth: '30%',
    height: '400px',  // Set the base height (you can adjust this base value as needed)
    margin: '0 auto',
    overflow: 'hidden',  // To prevent overflow issues
  };
  return (
    <div className='main-content'>
        <Sidebar2/>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <div style={chartStyle}>
        <BarChart />
      </div>
      <div style={chartStyle}>
        <LineChart />
      </div>
      <div style={chartStyle}>
        <PieChart />
      </div>
      <div style={chartStyle}>
        <RadarChart />
      </div>
      <div style={chartStyle}>
        <DoughnutChart />
      </div>
      <div style={chartStyle}>
        <BubbleChart />
      </div>
    </div>
       
    </div>
  )
}

export default analytics
