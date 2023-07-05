import { useQuery } from '@tanstack/react-query';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2'
import {useEffect, useState} from 'react'

// This file creates Bar graph component

// Register Chart 
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// Set options for Bar graph
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Cases Today',
        },
    },
    maintainAspectRatio: false
};

// Bargraph Functional Component
const BarGraph = () => {

    // Create State for storing values of the bar graph
    const [mapValues, setMapValues] = useState<any>([]);

    // Get data from the api using react query aks TanstackQuery
    const { data} = useQuery({
        queryKey: ['res'],
        queryFn: () => fetch('https://disease.sh/v3/covid-19/all').then((res) => res.json())
    });

    // Create map data such as labels and datasets.
    const mapData = {
        labels: ['Today Cases', 'Today Recoverd', 'Today Deaths'],
        datasets: [
          {
            label: 'value',
            data: mapValues,
            backgroundColor: 'rgba(255, 99, 132)',
          },
        ],
    };

    // Monitor the changes in data
    useEffect(() => {
        const update = () => {
            if (data) {
                setMapValues([data.todayCases, data.todayRecovered, data.todayDeaths])
            }        
        }
        update();
    },[data])

    // returns a bar graph
    return (
        <div className='flex-1'>
            <Bar options={options}  data={mapData}/>
        </div>
    )
        
}

export default BarGraph