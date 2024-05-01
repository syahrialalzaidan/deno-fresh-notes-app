import JournalFactory from "../islands/factory.tsx";

export interface Journal {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export interface JournalProps {
  data: Journal[];
  factory?: JournalFactory;
}

export interface JournalBoxProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface JournalListProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  setCurrentJournal: (
    journal: { id: string; title: string; content: string; created_at: string },
  ) => void;
}