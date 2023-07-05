import { useQuery } from '@tanstack/react-query';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {useEffect, useState} from 'react'

// This file create a Line graph

// Regiter chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Create options for line graph
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Cases',
        },
    },
    maintainAspectRatio: false
};

// Line Graph functional component
const LineGraph = () => {

    // Use State to store labels and values of the line graph
    const [mapLabels, setMapLabels] = useState<any>([]);
    const [mapValues, setMapValues] = useState<any>([]);

    // Get data from api using react query or TanstackQuery
    const { data } = useQuery({
        queryKey: ['data'],
        queryFn: () => fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then((res) => res.json())
    });

    // Create labels of line graph
    const labels = mapLabels.map((res: string) => res);
    
    // Create data of line graph
    const mapData = {
        labels,
        datasets: [
            {
            label: 'Cases',
            data: mapValues.map((res:number) => res),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    // Monitor changes in data
    useEffect(() => {
        const update = () => {
            if (data && data.cases) {
                const arr = Object.keys(data.cases).map((key) => [key, data.cases[key]]);
                const newLabels = arr.map((data) => data[0]);
                const newValues = arr.map((data) => data[1]);
                setMapValues(newValues);
                setMapLabels(newLabels);
            }        
        }
        update();
    },[data])

    // Returns a Line graph
    return (
    <div className='flex-1'>
            <Line height={150} options = { options } data = { mapData } />
        </div>
    )
        
}

export default LineGraph