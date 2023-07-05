import React from 'react'
import { Icon } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import 'leaflet/dist/leaflet.css'

// This file creates a map using react leaflet

// Map functional component
const Map = () => {

    // Get data from api using react query or TanstackQuery
    const { isLoading, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetch('https://disease.sh/v3/covid-19/countries').then((res) => res.json())
    })
    
    // Create marker Icon
    var myIcon = new Icon({
        iconUrl: require('../assets/local-two.png'),
        iconSize: [40, 50],
    });

    // Returns a map with markers
    return (
        <MapContainer className='flex-1 h-[50vh]' center={[23, 78]} zoom={4} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {!isLoading && data.map((val:any, index:number) =>
            <Marker key={index} position={[val.countryInfo.lat, val.countryInfo.long]} icon={myIcon}>
                <Popup>
                <div className='flex flex-col items-center'>
                    <span className='text-lg font-bold'>{val.country}</span>
                    <span>Active: <span className='font-bold text-red-500'>{val.active}</span></span>
                    <span>Recoverd: <span className='font-bold text-green-500'>{val.recovered}</span></span>
                    <span>Death: <span className='font-bold'>{val.deaths}</span></span>
                </div>
                </Popup>  
            </Marker>
            )}
        </MapContainer> 
    )
}

export default Map