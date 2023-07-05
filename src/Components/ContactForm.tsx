import { useAppDispatch, useAppSelector } from "../Store/store";
import { Contact, addContact, editContact } from "../Slice/contactSlice";
import React, { useState } from 'react';

// This file creates a form to create or edit contact

// Define the structure of props
interface Props{
    handleClose: () => void,
    id?: number | null,
    fname?: string,
    lname?: string,
    fstatus?: string
}

// Contaxct form functional component
const ContactForm:React.FC<Props> = ({handleClose, id=null,fname='', lname='', fstatus=''}) => {

    // Create an object of dispatch to call an action 
    const dispatch = useAppDispatch();

    // Get contact from redux state using selector
    const contacts = useAppSelector(state => state.contact.contact);

    // Create state for firstname, lastname and status
    const [firstName, setFirstName] = useState<string>(fname);
    const [lastName, setLastName] = useState<string>(lname);
    const [status, setStatus] = useState<string>(fstatus);

    // Check form validation and create or edit contact else show alert
    const validateForm = (e:any) => {

        if (firstName.length === 0) {
            alert('First name cannot be empty')
            return
        }else if (lastName.length === 0) {
            alert('Last name cannot be empty')
            return
        }else if (status.length === 0) {
            alert('Status cannot be empty')
            return
        } else if (id !== null) {
            const newContact: Contact = {
                id: id,
                firstName,
                lastName,
                status
            }
    
            dispatch(editContact(newContact));
            handleClose()
        }else {
            const newContact: Contact = {
                id: contacts.length,
                firstName,
                lastName,
                status
            }
            
            dispatch(addContact(newContact));
            setFirstName('')
            setLastName('')
            setStatus('')
            handleClose()
        }
    }

    // Returns a form
    return (
        <div className='flex flex-col gap-4 items-center justify-center'>
            <span className="text-white font-bold text-lg">{`${id===null ? 'Create' : 'Edit'} Contact Screen`}</span>
            <div className='flex flex-col max-w-4xl w-fit ring-2 ring-black p-6 bg-white'>
                <form className='flex flex-col gap-4'>
                    <label className='flex flex-col md:flex-row md:gap-2' >
                        First Name:
                        <input className="ring-1 ring-black px-2" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    </label>
                    <label className='flex flex-col md:flex-row md:gap-2'>
                        Last Name: 
                        <input className="ring-1 ring-black px-2" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    </label>
                    <span className='flex gap-10 items-center'>
                        <label>Status:</label>
                        <span className='flex flex-col gap-2 '>
                            <label className="flex gap-2 cursor-pointer items-center">
                                <input type='radio' name='status' value='active' className="accent-black" checked={status==='Active'} onChange={(e) => setStatus('Active')}/>Active
                            </label>
                            <label className="flex gap-2 cursor-pointer items-center">
                            <input type='radio' name='status' value='active' className="accent-black" onChange={(e)=>setStatus('Inactive')} checked={status==='Inactive'}/>Inactive
                            </label>
                        </span>
                    </span>
                </form>
            </div>
            <button className=" ring-black ring-1 px-2 bg-slate-400 w-fit" onClick={(e)=>validateForm(e)}>Save Contact</button>
      </div>     
    )
}

export default ContactForm