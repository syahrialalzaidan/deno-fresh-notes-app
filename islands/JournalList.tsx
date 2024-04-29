interface JournalListProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  setCurrentJournal: (
    journal: { id: string; title: string; content: string; created_at: string },
  ) => void;
}

export default function JournalList(
  { id, title, content, createdAt, setCurrentJournal }: JournalListProps,
) {
  const handleDeleteJournal = async () => {
    const response = await fetch("/api/handler", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    //refresh the site
    location.reload();
  };

  const trimString = function (string: string, length: number) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

  return (
    <>
      <div
        className="flex w-full cursor-pointer items-center justify-between border-b border-slate-300 px-5 py-4"
        onClick={() => {
          setCurrentJournal({
            id,
            title,
            content,
            created_at: createdAt,
          });
        }}
      >
        <div className="w-10/12">
          <h1 className="mb-1 w-full truncate  text-[1.1rem] font-semibold lg:text-xl">
            {trimString(title, 20)}
          </h1>
          <p className="text-sm text-gray-500 lg:text-base">{trimString(content, 50)}</p>
        </div>
        <div onClick={handleDeleteJournal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 20 20"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </div>
      </div>
    </>
  );
}
