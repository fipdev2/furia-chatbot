import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL ?? 'https://furia-chatbot-server.vercel.app',
});

console.log(`API URL: ${process.env.API_URL}`);
export const sendMessage = async (guestId: string, input: string) => {
  const res = await api.post(`/chat/send/user/${guestId}`, { input });
  return res.data;
};

export const getHistory = async (guestId: string) => {
  const res = await api.get(`/chat/history/user/${guestId}`);
  return res.data;
};
