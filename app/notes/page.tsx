import css from './NotesPage.module.css';
import AppClient from './Notes.client';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';

type Props = {
  params: Promise<{ query: string; page: number }>;
};

export default async function App({ params }: Props) {
  const queryClient = new QueryClient();

  const { query, page } = await params;

  queryClient.prefetchQuery({
    queryKey: ['notes', query, page],
    queryFn: () => fetchNotes(query, page),
  });
  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AppClient />
      </HydrationBoundary>
    </div>
  );
}
