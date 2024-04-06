import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiGetContacts, apiAddContact, apiDeleteContact } from "./contactsOps";

const CONTACTS_INITIAL_STATE = {
  contacts: [],
  loading: false,
  error: null,
  filters: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: CONTACTS_INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(apiGetContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(apiAddContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(apiAddContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(apiDeleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// Генератори екшенів
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export const selectContacts = (state) => state.contacts.contacts;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContactsFilter = (state) => state.contacts.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
