"use client";

import { useSelectedTopicStore } from "@/stores/selectedTopicStore";

interface NotesProps {
  data: any;
}

export const Notes = ({ data }: NotesProps) => {
  const { selectedTopic } = useSelectedTopicStore();

  return (
    <div className="col-span-10">
      {data?.map(
        (item: any, index: number) =>
          item.topic === selectedTopic && (
            <div key={index} className="">
              <div className=" p-3 border-b border-neutral-400 font-semibold">
                {item.topic}
              </div>
              <div className="p-3">{item.note}</div>
            </div>
          )
      )}
    </div>
  );
};
