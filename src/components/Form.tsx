import { useIndexQuestion } from "../stores/useIndexQuestion.ts";
import { useState } from "react";

const Form = () => {
  const { setIndexQuestion } = useIndexQuestion();
  const [input, setInput] = useState("");

  const onSubmitQuestion = (e: any) => {
    e.preventDefault();
    setIndexQuestion();
    setInput("");
  };
  return (
    <form
      onSubmit={onSubmitQuestion}
      className={"border-b border-black/40 py-2 flex"}
      action=""
    >
      <input
        className={"focus:outline-none w-full"}
        placeholder={"Answer"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <input className={"cursor-pointer"} type="submit" />
    </form>
  );
};

export default Form;
