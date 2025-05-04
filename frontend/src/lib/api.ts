import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL ?? 'http://localhost:5000',
});

console.log(`API URL: ${process.env.API_URL}`);
export const sendMessage = async (input: string) => {
  const res = await api.post('/chat/send', { input });
  return res.data;
};

export const getHistory = async () => {
  const res = await api.get('/chat/history');
  return res.data;
};
