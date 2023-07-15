"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);
  const onSetText = (e: any) => {
    setText(e.target.value);
  };

  const onSetToDos = () => {
    const newToDos = [...toDos];
  };

  return (
    <main className="">
      <form onSubmit={onSetToDos}>
        <input
          type="text"
          value={text}
          onInput={onSetText}
          className="border border-black"
        />
        <button type="submit">Add</button>
      </form>

      {toDos.map((toDo, index) => (
        <p key={index}>{toDo}</p>
      ))}
    </main>
  );
}
