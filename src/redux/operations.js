import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://665716c79f970b3b36c7e69f.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts")
            console.log(response)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const addContact = createAsyncThunk("contacts/addContact",
    async ({ id, name, phone}, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { id, name, phone });
            console.log(response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            console.log(response)
            return response.data;

    } catch (error) {
            return thunkAPI.rejectWithValue(error.message);          
    }
});

//https://665716c79f970b3b36c7e69f.mockapi.io/:endpoint
// endpoints:
// GET
//           /contacts
//           /contacts/:id
// POST
//           /contacts
// PUT albo DELETE
//           /contacts/:id