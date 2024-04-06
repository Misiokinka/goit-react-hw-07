import axios from "axios";

export const fetchContacts = async () => {
  const { data } = await axios.get(
    `https://660fe3e70640280f219bbf1f.mockapi.io/contacts`
  );
  return data;
};

export const addContact = async (contactData) => {
  const { data } = await axios.post(
    `https://660fe3e70640280f219bbf1f.mockapi.io/contacts`,
    contactData
  );
  return data;
};

export const deleteContact = async (contactId) => {
  const { data } = await axios.delete(
    `https://660fe3e70640280f219bbf1f.mockapi.io/contacts/${contactId}`
  );
  return data;
};
