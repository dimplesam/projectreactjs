import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  const nameRef = useRef();
  const [data, setData] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    setData(nameRef.current.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
      <p> name: {data}</p>
    </form>
  );
};

export default Uncontrolled;
