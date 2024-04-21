import { Notes } from "@/components/notes";
import { Topics } from "@/components/topics";
import { createClient } from "@/utils/supabase/server";

const Write = async () => {
  const supabase = createClient();
  let { data: notes } = await supabase.from("notes").select("*");

  return (
    <main className="h-full grid grid-cols-12">
      <Topics data={notes} />
      <Notes data={notes} />
    </main>
  );
};

export default Write;
