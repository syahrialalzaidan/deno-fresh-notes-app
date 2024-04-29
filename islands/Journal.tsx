import { useEffect, useState } from "preact/hooks";
import JournalBox from "../islands/JournalBox.tsx";
import JournalList from "../islands/JournalList.tsx";

interface Journal {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

interface JournalProps {
  data: Journal[];
}

export const formattedDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString();
  return formattedDate;
};

export default function Journal({ data }: JournalProps) {
  const [dataState, setDataState] = useState(data);
  const [currentJournal, setCurrentJournal] = useState(dataState[0]);

  //sort data based on created_at
  dataState.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const handleAddJournal = async () => {
    const response = await fetch("/api/handler", {
      method: "POST",
    });
    //refresh the site
    location.reload();
  };

  // useEffect(() => {
  //   console.log(currentJournal);
  // }, [currentJournal]);

  // console.log(currentJournal)

  return (
    <>
      <div className="h-screen flex items-center justify-center overflow-x-hidden">
        <div className="flex h-4/5 w-10/12 overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="flex h-full w-3/12 flex-1 flex-col justify-between pr-1 lg:flex-none lg:border-r lg:border-slate-300">
            <div className="flex h-[85%] w-full flex-col justify-start overflow-y-auto">
              {dataState.map((item) => (
                <JournalList
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  createdAt={formattedDate(item.created_at)}
                  setCurrentJournal={setCurrentJournal}
                />
              ))}

              {dataState.length === 0 && (
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <p className="text-base text-gray-500">Add your notes now!</p>
                </div>
              )}
            </div>
            <div className="flex w-full flex-1 items-center justify-end px-5">
              <button
                className="flex items-center z-50 gap-3 bg-green-500 rounded-lg bg-button px-5 py-3 text-white"
                onClick={handleAddJournal}
              >
                Add +
              </button>
            </div>
          </div>
          <div
            className={`absolute left-0 top-0 z-[70] w-full
              "translate-x-0" 
            } transition-all duration-700 ease-in-out lg:z-0 lg:relative lg:flex-1 lg:translate-x-0`}
          >
            {/* journal box */}
            {dataState.length === 0
              ? (
                <div className="flex h-screen w-full flex-col overflow-auto bg-white px-5 lg:h-full">
                  <div className="my-12 flex-1 px-3 lg:px-10">
                    <p className="text-base text-gray-500">No journal found</p>
                  </div>
                </div>
              )
              : (
                <JournalBox
                  id={currentJournal.id}
                  title={currentJournal.title}
                  content={currentJournal.content}
                  createdAt={formattedDate(currentJournal.created_at)}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
}
