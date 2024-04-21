"use client";

import { useSelectedTopicStore } from "@/stores/selectedTopicStore";

interface TopicsProps {
  data: any;
}

export const Topics = ({ data }: TopicsProps) => {
  const { setSelectedTopic } = useSelectedTopicStore();

  return (
    <div className="col-span-2 border-r border-neutral-400">
      {data?.map((item: any, index: number) => (
        <div
          onClick={() => setSelectedTopic(item.topic)}
          key={index}
          className="border-b border-neutral-400 hover:bg-neutral-200 p-3"
        >
          {item.topic}
        </div>
      ))}
    </div>
  );
};
