import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// This file creates contacts slice for redux store

// Define structure of contact
export interface Contact{
    id: number,
    firstName: string,
    lastName: string,
    status: string    
}

// Create array of contact structure
interface ContactState{
    contact: Contact[]
}

// Define initial state
const initialState: ContactState = {
    contact: []
}

// Create contact slice
export const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contact.push(action.payload);
        },
        editContact: (state, action: PayloadAction<Contact>) => {
            state.contact[action.payload.id] = action.payload;
        },
        deleteContact: (state, action: PayloadAction<Contact>) => {
            state.contact = state.contact.filter(data => data.id !== action.payload.id);
        }
    }
})

// export contact slice reducer
export default ContactSlice.reducer;

// export contact slice action
export const { addContact, editContact, deleteContact } = ContactSlice.actions;