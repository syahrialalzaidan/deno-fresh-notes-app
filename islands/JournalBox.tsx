import { useEffect, useState } from "preact/hooks";
import { JournalBoxProps } from "../utils/interface.tsx";

export default function JournalBox(
  { id, title, content, createdAt }: JournalBoxProps,
) {
  const [titlestate, setTitleState] = useState(title);
  const [contentstate, setContentState] = useState(content);

  useEffect(() => {
    setTitleState(title);
    setContentState(content);
  }, [title, content]);

  const handleSave = async () => {
    const response = await fetch("/api/handler", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: titlestate,
        content: contentstate,
      }),
    });
    if (response.status !== 200) {
      alert("Failed to save");
      return;
    }
    location.reload();
  };

  return (
    <>
      <div className="flex h-screen w-full flex-col overflow-auto bg-white px-5 lg:h-full">
        <div className="mt-12 flex-1 px-3 lg:px-10">
          <p className="text-base text-gray-500">{createdAt}</p>
          <textarea
            name="title"
            id="title"
            className="mb-3 mt-5 w-full resize-none overflow-y-hidden border-none bg-transparent text-3xl font-semibold outline-none lg:text-4xl"
            placeholder="Title here..."
            value={titlestate}
            onChange={(e) => setTitleState(e.currentTarget?.value)}
          >
          </textarea>

          <textarea
            name="content"
            id="content"
            className="w-full h-80 resize-none overflow-y-hidden border-none bg-transparent text-lg outline-none lg:text-xl"
            placeholder="Write here..."
            value={contentstate}
            onChange={(e) => setContentState(e.currentTarget?.value)}
          >
          </textarea>
        </div>
        <div className="sticky bottom-0 py-5 px-5 flex justify-end">
          <button
            className={`bg-button px-7 py-3 bg-blue-500 text-white rounded-lg font-semibold text-lg`}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
