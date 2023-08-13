import { createSlice,nanoid } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./operations";
const conctactsInitialState ={
    items:[],
    isLoading:false,
    error: null,
};
const handlePending = state =>{
    state.isLoading=true;
}

const handleRejected = (state,action) =>{
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name:'contacts',
    initialState: conctactsInitialState,
    // reducers: {
    //     addContact:{
    //         reducer(state,action){
    //             state.contacts.push(action.payload)
    //     },prepare({name,number}){
    //         return {
    //             payload:{
    //                 id: nanoid(),
    //                 name,
    //                 number,
    //             }
    //         }
    //     }
       
    //     },
    //     deleteContact(state,action){
    //         const index = state.contacts.findIndex(task=>task.id === action.payload)
    //         state.contacts.splice(index,1)
    //     }
    // }
    extraReducers: {
        [fetchContacts.pending]:handlePending,
        [fetchContacts.fulfilled](state,action) {
            state.isLoading = false;
            state.error=null;
            state.items=action.payload;
        },
        [fetchContacts.rejected]:handleRejected,
        [addContact.rejected]:handleRejected,
        [addContact.fulfilled](state,action){
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload)
        },
        [addContact.rejected]:handleRejected,
        [deleteContact.pending]:handlePending,
        [deleteContact.fulfilled](state,action){
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(task=>task.id === action.payload)
            state.items.splice(index,1)
        },
        [deleteContact.rejected]:handleRejected,
    }
})



export const contactsReducer = contactsSlice.reducer;

// export const {addContact,deleteContact} = contactsSlice.actions;
