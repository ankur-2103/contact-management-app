import React from 'react'
import { NavLink } from 'react-router-dom'

// This file creates Not found page

// Not found page functional component
const NotFound = () => {

    // Returns not found page
    return (
        <div className='flex flex-col items-center justify-center flex-1 gap-4'>
            <span>Page Not Found!</span>
            <span className= 'flex flex-col items-center md:flex-row md:gap-2'>Please go back to <NavLink to={'/contact'} className='text-blue-500 font-bold'>Contact</NavLink> or <NavLink to={'/maps-and-charts'} className='text-blue-500 font-bold'>Maps and Charts</NavLink></span>
        </div>
    )
}

export default NotFound