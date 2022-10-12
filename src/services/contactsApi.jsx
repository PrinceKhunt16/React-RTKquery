import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:4000/' 
    }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        contacts: builder.query({
            query: () => ({
                url: '/contacts',
            }),
            providesTags: ['Contact'] 
        }),
        contact: builder.query({
            query: (id) => ({ 
                url: `/contacts/${id}`,
            }),
            providesTags: ['Contact'] 
        }),
        addContact: builder.mutation({
            query: (contact) => ({
                url: 'contacts',
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['Contact']
        }),
        updateContact: builder.mutation({
            query: ({id, ...contact}) => ({
                url: `/contacts/${id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['Contact']
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Contact']
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