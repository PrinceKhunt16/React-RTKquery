import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:4000/' 
    }),
    tagTypes: ['ContactTag'],
    endpoints: (builder) => ({
        contacts: builder.query({
            query: () => ({
                url: '/contacts',
            }),
            providesTags: ['ContactTag'] 
        }),
        contact: builder.query({
            query: (id) => ({ 
                url: `/contacts/${id}`,
            }),
            providesTags: ['ContactTag'] 
        }),
        addContact: builder.mutation({
            query: (contact) => ({
                url: 'contacts',
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['ContactTag']
        }),
        updateContact: builder.mutation({
            query: ({id, ...contact}) => ({
                url: `/contacts/${id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['ContactTag']
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['ContactTag']
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