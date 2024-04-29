import { supabase } from "../components/_db.ts";

export async function deleteJournal(id: string) {
  const { data, error } = await supabase.from("notes").delete().match({
    id: id,
  });

  if (error) {
    console.error(error);
    return;
  }
  return data;
}

export async function addJournal() {
  const { data, error } = await supabase
    .from("notes")
    .insert([
      {
        title: "New Journal",
        content: "Write your journal here",
        created_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    console.error(error);
    return;
  }
  return data;
}

export async function updateJournal(
  id: string,
  title: string,
  content: string,
) {
  const { data, error } = await supabase
    .from("notes")
    .update({ title, content, created_at: new Date().toISOString() })
    .match({ id: id });

  if (error) {
    console.error(error);
    return;
  }
  return data;
}
