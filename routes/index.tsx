import { supabase } from "../components/_db.ts";
import Journal from "../islands/Journal.tsx";

export default async function Home() {
  const { data, error } = await supabase.from("notes").select("*");


  return (
    <div className={`bg-blue-200`}>
      {data ? <Journal data={data} /> : <div>Loading...</div>}
    </div>
  );
}
