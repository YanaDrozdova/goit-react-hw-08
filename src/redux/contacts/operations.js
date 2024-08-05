import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', values);
      toast.success('Contact added successfully');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong...Please,try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to delete contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (data, thunkAPI) => {
    try {
      const { id, name, number } = data;
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success('Contact updated successfully');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
