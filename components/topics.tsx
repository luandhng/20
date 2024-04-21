"use client";

import { useNotesDataStore } from "@/stores/notesDataStore";
import { useSelectedTopicStore } from "@/stores/selectedTopicStore";
import { useEffect } from "react";

interface TopicsProps {
  notes: any;
}

export const Topics = ({ notes }: TopicsProps) => {
  const { selectedTopic, setSelectedTopic } = useSelectedTopicStore();
  const { data, setData, addData, removeTopic } = useNotesDataStore();
  const uuid = crypto.randomUUID();

  useEffect(() => {
    setData(notes);
  }, []);

  return (
    <div className="col-span-2 border-r border-neutral-400">
      <button
        onClick={() => {
          addData({ this_topic: uuid, topic: "", note: "" });
          setSelectedTopic(uuid);
        }}
        className="p-3 border-b bg-neutral-200 font-semibold border-neutral-400 w-full"
      >
        Add a topic
      </button>
      <div>
        {data?.map((item: any, index: number) => (
          <div
            onClick={() => setSelectedTopic(item.this_topic)}
            key={index}
            className={`${
              selectedTopic === item.topic && "bg-neutral-200"
            } border-b cursor-pointer select-none flex items-center justify-between border-neutral-400 hover:bg-neutral-200 p-3`}
          >
            <p>{item.topic}</p>

            <button onClick={() => removeTopic(item.this_topic)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
