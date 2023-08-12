import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

axios.defaults.baseURL = "https://64d62648754d3e0f1361b0fb.mockapi.io/contacts"

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_,thunkAPI) =>{
        try{
        const response = await axios.get("/contacts")
        return response.data;
    }
    catch(e) {
        return thunkAPI.rejectWithValue(e.message)
    }
}
)