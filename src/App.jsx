import React, { useEffect } from 'react'
import "./App.css"
import { useAddContactMutation, useContactQuery, useContactsQuery, useDeleteContactMutation, useUpdateContactMutation } from './services/contactsApi'

const App = () => {
    const { data } = useContactsQuery();

    return (
        <>
            <AddContact />
            {data && (
                <>
                    <div className='container'>
                        {
                            data?.map((contact) => {
                                return (
                                    <>
                                        <div className='data' key={contact.id}>
                                            <ContactDetail id={contact.id} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )}
        </>
    )
}

export const ContactDetail = ({ id }) => {
    const { data } = useContactQuery(id);

    return (
        <div className='contact' key={data?.id}>
            <div>{data?.id}</div>
            <div>{data?.name}</div>
            <div>{data?.email}</div>
        </div>
    )
}

export const AddContact = () => {
    const [addContact] = useAddContactMutation();
    const [updateContact] = useUpdateContactMutation();
    const [deleteContact] = useDeleteContactMutation();

    const contact = {
        "id": 3,
        "name": "Virat Kohli",
        "email": "virat@gmail.com"
    }

    const addHandler = async () => {
        await addContact(contact);
    }

    const contactUpdate = {
        "id": 3,
        "name": "Rohit Sharma",
        "email": "rohit@gmail.com"
    }

    const updateHandler = async () => {
        updateContact(contactUpdate);
    }

    const contactDelete = {
        "id": 3
    }

    const deleteHandler = async () => {
        deleteContact(contactDelete.id);
    }

    return (
        <div className='buttons'>
            <button onClick={addHandler}>Add Contact</button>
            <button onClick={updateHandler}>Update Contact</button>
            <button onClick={deleteHandler}>Delete Contact</button>
        </div>
    )
}

export default App
