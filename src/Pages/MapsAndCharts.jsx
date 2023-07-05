import Graph from '../Components/LineGraph';
import Map from '../Components/Map';
import BarChart from '../Components/BarGraph';

// This file creates Maps and charts page

// Map and chart page functional component
const MapsAndCharts = () => {

  // Returns map and charts page
  return (
    <div className='flex flex-col h-[100vh] p-2 w-full'>
      <div className='flex flex-col  md:flex-row md:flex-1 h-[50vh] gap-2'>
        <Graph />
        <BarChart/>
        </div>
        <span className='w-full'>
          <Map/>
        </span>
    </div>
  )
}

export default MapsAndCharts