import ContactCard from '../Components/ContactCard';
import ContactForm from '../Components/ContactForm';
import { useAppSelector } from '../Store/store'
import Close from '../assets/close-one.svg'
import { useState } from 'react';

// This file creates contact page

// Functional component for no contacts
const NoContacts =()=> {
  return (
    <span className="flex gap-2 items-center">
      <span className=""><img src={Close} alt='close'/></span>
      <span className='flex flex-col'>
        <span className="">No contact found</span>
        <span className="">Please add contact from Create Contact button</span>
      </span>
    </span>
  )
}

// Contact page functional component
const Contact = () => {

  // Get contacts from redux
  const contacts = useAppSelector(state => state.contact.contact);

  // Use state to handle open and close
  const [isOpen, setIsOpen] = useState(false);

  // Set isOpen to close
  const handleClose = () => {
    setIsOpen(false);
  }

  // Return contact page
  return (
    <div className='flex flex-1 flex-col justify-center items-center h-[100vh] relative'>
      <button className="bg-slate-300 p-2 font-semibold text-xl ring-1 ring-black m-10" onClick={()=>setIsOpen(true)}>Create Contact</button>
      <span className="flex flex-wrap gap-4 justify-center items-center flex-1 p-4 overflow-auto">
        {contacts.length === 0 ? <NoContacts/> : contacts.map((data) => <ContactCard key={data.id} contact={data}/>)}
      </span>
      <div className={`${isOpen ? 'flex' : 'hidden'} items-center justify-center absolute z-10 w-full h-full bg-[rgba(0,0,0,0.7)] text-black]`}>
       <ContactForm handleClose={handleClose}/>
      </div>
    </div>
  )
}

export default Contact