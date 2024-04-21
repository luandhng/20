import { createClient } from "@/utils/supabase/server";

const Write = async () => {
  const supabase = createClient();
  let { data: notes } = await supabase.from("notes").select("*");

  return (
    <main className="">
      {notes?.map((note, index) => (
        <div key={index} className="">
          <div className="">{note.topic}</div>
        </div>
      ))}
    </main>
  );
};

export default Write;
