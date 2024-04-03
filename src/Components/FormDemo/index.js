import React, { useState } from "react";

const FormDemo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, description, content });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-4">
      <p className="text-xl text-center">Add Blog</p>
      <input
        type="text"
        placeholder="Title"
        className="p-2 outline-none"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="p-2 outline-none"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <textarea
        type="text"
        placeholder="Content"
        rows={9}
        className="p-2 outline-none"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button className="p-2 outline-none bg-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormDemo;
