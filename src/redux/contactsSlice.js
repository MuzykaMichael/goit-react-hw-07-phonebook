import { createSlice,nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
const conctactsInitialState ={
    contacts:[],
};
const contactsSlice = createSlice({
    name:'contacts',
    initialState: conctactsInitialState,
    reducers: {
        addContact:{
            reducer(state,action){
                state.contacts.push(action.payload)
        },prepare({name,number}){
            return {
                payload:{
                    id: nanoid(),
                    name,
                    number,
                }
            }
        }
       
        },
        deleteContact(state,action){
            const index = state.contacts.findIndex(task=>task.id === action.payload)
            state.contacts.splice(index,1)
        }
    }
})

const contactsPersistOption = {
    key: 'contacts',
    storage,
}

export const contactsReducer = persistReducer(
    contactsPersistOption,
    contactsSlice.reducer,
)

export const {addContact,deleteContact} = contactsSlice.actions;
