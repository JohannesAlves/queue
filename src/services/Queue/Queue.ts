import { BASE_URL, befrontApi } from "../api";

export type User = {
  name: string;
  whatsapp: string;
  broker: string;
  value: string;
};

export const signupQueue = async (user: User) => {
  const url = `${BASE_URL}/queue-register`;

  try {
    const { data } = await befrontApi.post(url, user);
    return data;
  } catch (error) {
    return null;
  }
};

export const getUserByIdQueue = async (id: string) => {
  const url = `${BASE_URL}/queue-user/${id}`;

  try {
    const { data } = await befrontApi.get(url);
    return data;
  } catch (error) {
    return null;
  }
};

export const getAllUsers = async () => {
  const url = `${BASE_URL}/queue-users`;

  try {
    const { data } = await befrontApi.get(url);
    return data;
  } catch (error) {
    return null;
  }
};

export const getUsersByBroker = async (broker: string) => {
  const url = `${BASE_URL}/queue-users-broker/${broker}`;

  try {
    const { data } = await befrontApi.get(url);
    return data;
  } catch (error) {
    return null;
  }
};

export const deleteUserQueue = async (userId: string) => {
  const url = `${BASE_URL}/delete-user/${userId}`;

  try {
    const { data } = await befrontApi.delete(url);
    return data;
  } catch (error) {
    return null;
  }
};
