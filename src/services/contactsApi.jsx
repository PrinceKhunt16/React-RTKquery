import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3000/' 
    }),
    tagTypes: ['contact'],
    endpoints: (builder) => ({
        contacts: builder.query({
            query: () => ({
                url: '/contacts',
            }),
            providesTags: ['contact'] 
        }),
        contact: builder.query({
            query: (id) => ({ 
                url: `/contacts/${id}`,
            }),
            providesTags: ['contact'] 
        }),
        addContact: builder.mutation({
            query: (contact) => ({
                url: 'contacts',
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['contact']
        }),
        updateContact: builder.mutation({
            query: ({id, ...contact}) => ({
                url: `/contacts/${id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['contact']
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['contact']
        })
    })
});

export const { 
    useContactQuery, 
    useContactsQuery,
    useAddContactMutation,
    useUpdateContactMutation,
    useDeleteContactMutation 
} = contactsApi; 