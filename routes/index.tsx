import { supabase } from "../components/_db.ts";
import Journal from "../islands/Journal.tsx";
import JournalFactory from "../islands/factory.tsx";

export default async function Home() {
  const { data, error } = await supabase.from("notes").select("*");
  const factory = new JournalFactory();

  return (
    <div className={`bg-blue-200`}>
      {data ? factory.createJournal({ data, factory }) : <div>Loading...</div>}
    </div>
  );
}
