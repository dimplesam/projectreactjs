import React, { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please Choose a File");
      return;
    }
    console.log({ image, selected });
    setImageUrl(URL.createObjectURL(image));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <input
        type="file"
        className="p-3 border-2 border-dashed"
        onChange={(event) => setImage(event.target.files[0])}
      />

      <FormControl>
        <InputLabel size="small" id="selected">
          Choose Option
        </InputLabel>
        <Select
          size="small"
          label="Choose Option"
          labelId="selected"
          placeholder="Select A Value"
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
        >
          <MenuItem value={"Option1"}>Option 1</MenuItem>
          <MenuItem value={"Option2"}>Option 2</MenuItem>
          <MenuItem value={"Option3"}>Option 3</MenuItem>
        </Select>
      </FormControl>
      <Button
        disableElevation
        variant="contained"
        type="submit"
        className="p-2 !capitalize !bg-black"
      >
        Upload
      </Button>
      <img src={imageUrl} alt="" />
    </form>
  );
};

export default FileUpload;
