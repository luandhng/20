"use server";

import { createClient } from "@/utils/supabase/server";

interface removeTopicServerProps {
  this_topic: string;
}

export async function removeTopicServer({
  this_topic,
}: removeTopicServerProps) {
  const supabase = createClient();

  await supabase.from("notes").delete().eq("this_topic", this_topic);
}
