// src/services/api.ts
import axios from 'axios';
import { Book } from '../component/types';

const API_URL = 'https://6874e765dd06792b9c95c556.mockapi.io/api/v1/books'; 

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBooks = (): Promise<Book[]> => {
  return apiClient.get('/').then(response => response.data);
};

export const getBookById = (id: string): Promise<Book> => {
  return apiClient.get(`/${id}`).then(response => response.data);
};

export const createBook = (data: Omit<Book, 'id'>): Promise<Book> => {
  return apiClient.post('/', data).then(response => response.data);
};
export const updateBook = (id: string, data: Partial<Book>): Promise<Book> => {
  return apiClient.put(`/${id}`, data).then(response => response.data);
};

export const deleteBook = (id: string): Promise<void> => {
  return apiClient.delete(`/${id}`);
};