"use client";
import { useState } from "react";

export const MyForm = () => {
  const [input, setInput] = useState({});

  const onChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col">
        <p>{input ? input.name : ""}</p>
        <label className="w-10" htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            onChange={(e) => onChange(e)}
          />
        </label>
        <label htmlFor="age">
          Age
          <input
            id="age"
            type="number"
            name="age"
            onChange={(e) => onChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
