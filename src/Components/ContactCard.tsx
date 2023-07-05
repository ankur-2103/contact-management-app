import React, {useState} from 'react'
import { Contact, deleteContact } from '../Slice/contactSlice'
import { useAppDispatch } from '../Store/store'
import CreateContact from './ContactForm'

// This file creates a contact card

// Define structure of the props
interface Props{
    contact: Contact
}

// Contact card functional component
const ContactCard: React.FC<Props> = ({ contact }) => {
    
    // Create an object of dispatch to call an action 
    const dispatch = useAppDispatch();

    // Use state to handle open and close functions
    const [isOpen, setIsOpen] = useState(false);

    // Set isOpen state to false
    const handleClose = () => {
        setIsOpen(false);
    }

    // Returns a Card with edit and delete button
    return (
        <>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-col p-8 gap-4 bg-slate-100 ring-1 ring-black rounded-lg w-60'>
                <span className='truncate'>First Name: <span className='font-semibold'>{contact.firstName}</span></span>
                <span className='truncate'>Last Name: <span className='font-semibold truncate'>{contact.lastName}</span></span>
                <span >Status: <span className='font-semibold'>{contact.status}</span></span>
            </div>
            <button className='p-4 text-white w-32 rounded-xl py-1 font-bold bg-gradient-to-b from-[#a9ffb3] to-[#22c362]' onClick={()=>setIsOpen(true)}>Edit</button>
            <button className='p-4 text-white w-32 rounded-xl py-1 font-bold bg-gradient-to-b from-[#ffa9a9] to-[#c32222]' onClick={()=>dispatch(deleteContact(contact))}>Delete</button>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} items-center justify-center absolute z-10 w-full h-full top-0 bg-[rgba(0,0,0,0.7)] p-4 text-black]`}>
            <CreateContact handleClose={handleClose} id={contact.id} fname={contact.firstName} lname={contact.lastName} fstatus={contact.status} />
       </div>
        </>
    )
}

export default ContactCard