import Phone from '../assets/phone.svg';
import Data from '../assets/data.svg';
import { NavLink, useLocation } from 'react-router-dom';

// This file creates sidebar component

export const Sidebar = () => {

    // Get path name form useLocation hook to highlight current page in sidebar
    const {pathname} = useLocation();

    return (
        <div className='flex flex-col z-10 bg-[#ff6384] h-screen p-1 md:p-2 pt-8 gap-4 duration-300 w-14 md:w-20'>
            <NavLink className={`flex flex-col items-center hover:bg-white rounded-lg ${pathname.includes('contact') && 'bg-white'}`} to={'/contact'}>
                <img src={Phone} alt='' className='w-8 md:w-10'/>
                <span className='text-center text-xs md:text-[15px]'>Contacts</span>
            </NavLink>
            <NavLink className={`flex flex-col items-center hover:bg-white rounded-lg ${pathname.includes('maps') && 'bg-white'}`} to={'/maps-and-charts'}>
                <img src={Data} alt='' className='w-8 md:w-10'/>
                <span className='text-center text-sm md:text-[15px]'>Maps and Charts</span>
            </NavLink>
        </div>
    )
}
