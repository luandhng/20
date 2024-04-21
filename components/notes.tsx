"use client";

import { updateNoteServer } from "@/actions/updateNoteServer";
import { updateTopicServer } from "@/actions/updateTopicServer";
import { useNotesDataStore } from "@/stores/notesDataStore";
import { useSelectedTopicStore } from "@/stores/selectedTopicStore";
import { useShowTopicsStore } from "@/stores/useShowTopicsStore";

export const Notes = () => {
  const { selectedTopic } = useSelectedTopicStore();
  const { data, updateTopic, updateNote } = useNotesDataStore();
  const { showTopics } = useShowTopicsStore();

  return (
    <div className={`${showTopics && "max-lg:hidden"} col-span-10 h-full`}>
      {data?.map(
        (item: any, index: number) =>
          item.this_topic === selectedTopic && (
            <div key={index} className="flex flex-col h-full">
              <input
                onChange={(e) => {
                  updateTopic(item.this_topic, e.target.value);
                  updateTopicServer({
                    newTopic: e.target.value,
                    this_topic: item.this_topic,
                  });
                }}
                defaultValue={item.topic}
                value={item.topic}
                className="focus:outline-none p-3 border-b border-neutral-400 font-semibold"
              ></input>

              <textarea
                onChange={(e) => {
                  updateNote(item.this_topic, e.target.value);
                  updateNoteServer({
                    newNote: e.target.value,
                    this_topic: item.this_topic,
                  });
                }}
                className="p-3 flex-1 h-full focus:outline-none"
                defaultValue={item.note}
              ></textarea>
            </div>
          )
      )}
    </div>
  );
};
