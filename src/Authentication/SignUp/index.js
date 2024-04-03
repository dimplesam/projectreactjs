import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log({ name, email, phone, password });
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };
  //Controlled Method
  return (
    <div className="flex flex-col gap-5 p-5">
      <TextField
        size="small"
        InputProps={{ className: "!rounded-full" }}
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        size="small"
        InputProps={{ className: "!rounded-full" }}
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        size="small"
        InputProps={{ className: "!rounded-full" }}
        label="Phone"
        value={phone}
        variant="outlined"
        onChange={(event) => setPhone(event.target.value)}
      />
      <TextField
        type="password"
        size="small"
        InputProps={{ className: "!rounded-full" }}
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        className="!rounded-full"
      >
        Submit
      </Button>
    </div>
  );
};

export default SignUp;
