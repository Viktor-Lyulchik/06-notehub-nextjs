import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import css from './NotesPage.module.css';
import AppClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

export default async function App() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', { query: '', page: 1 }],
    queryFn: () => fetchNotes('', 1),
  });

  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AppClient />
      </HydrationBoundary>
    </div>
  );
}
