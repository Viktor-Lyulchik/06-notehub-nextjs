import css from './NotesPage.module.css';
import AppClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

export default async function App() {
  const initialData = await fetchNotes('', 1);

  return (
    <div className={css.app}>
      <AppClient initialData={initialData} />
    </div>
  );
}
