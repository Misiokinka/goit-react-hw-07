import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../services/api";

export const apiGetContacts = createAsyncThunk(
  "contact/get",
  async (thunkAPI) => {
    try {
      const data = await fetchContacts();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  "contact/add",
  async (contactData, thunkAPI) => {
    try {
      const data = await addContact(contactData);
      return data;
    } catch {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  "contact/delete",
  async (contactId, thunkAPI) => {
    try {
      const data = await deleteContact(contactId);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
