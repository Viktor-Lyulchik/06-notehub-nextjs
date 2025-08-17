import axios from 'axios';
import type { Note, NotePost, NoteId, NoteFull } from '../types/note';

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  query: string,
  page: number
): Promise<NotesHttpResponse> => {
  const response = await axios.get<NotesHttpResponse>(
    'https://notehub-public.goit.study/api/notes',
    {
      params: {
        search: query,
        page: page,
        perPage: 12,
      },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );

  return response.data;
};

export const fetchNoteById = async (id: string): Promise<NoteFull> => {
  const response = await axios.get<NoteFull>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );

  return response.data;
};

export const createNote = async (note: NotePost): Promise<Note> => {
  const response = await axios.post<Note>(
    'https://notehub-public.goit.study/api/notes',
    note,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );

  return response.data;
};

export const deleteNote = async (id: NoteId): Promise<Note> => {
  const response = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );

  return response.data;
};
