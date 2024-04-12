import React, { useState } from "react";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  TextField,
} from "@mui/material";
import img1 from "../../ShareBR/BRAtect.jpg";
import img2 from "../../ShareBR/traffic.jpg";
import { Menu } from "@mui/icons-material";
import { useScroll } from "react-mkx-toolkit";
const BRArchitects = () => {
  const { scrollById, scrollToTop, scrollToBottom } = useScroll();

  const [open, setOpen] = useState(false);
  const tect = [
    {
      id: 1,
      image: "https://www.w3schools.com/w3images/house5.jpg",
    },
    {
      id: 2,
      image: "https://www.w3schools.com/w3images/house2.jpg",
    },
    {
      id: 3,
      image: "https://www.w3schools.com/w3images/house3.jpg",
    },
    {
      id: 4,
      image: "https://www.w3schools.com/w3images/house4.jpg",
    },
    {
      id: 5,
      image: "https://www.w3schools.com/w3images/house2.jpg",
    },
    {
      id: 6,
      image: "https://www.w3schools.com/w3images/house5.jpg",
    },
    {
      id: 7,
      image: "https://www.w3schools.com/w3images/house4.jpg",
    },
    {
      id: 8,
      image: "https://www.w3schools.com/w3images/house3.jpg",
    },
  ];

  const action = [
    {
      id: 1,
      image: "https://www.w3schools.com/w3images/team2.jpg",
      namu: "John Doe",
      profession: "CEO founder",
      message:
        "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
    {
      id: 2,
      image: "https://www.w3schools.com/w3images/team1.jpg",
      namu: "Jane Doe",
      profession: "Architect",
      message:
        "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
    {
      id: 3,
      image: "https://www.w3schools.com/w3images/team3.jpg",
      namu: "Mike Ross",
      profession: "Architect",
      message:
        "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
    {
      id: 4,
      image: "https://www.w3schools.com/w3images/team4.jpg",
      namu: "Dan Star",
      profession: "Architect",
      message:
        "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
  ];
  return (
    <div className="">
      <nav className="flex flex-row justify-between bg-slate-50 fixed w-full py-2 shadow-2xl z-40">
        <Button
          size="large"
          color="inherit"
          className="!capitalize"
          variant="text"
          onClick={scrollToTop}
        >
          <strong className="px-2 tracking-widest">BR</strong>
          <p className="tracking-widest">Architects</p>
        </Button>
        <div className="lg:flex hidden gap-4">
          <Button
            size="large"
            color="inherit"
            className="!capitalize"
            variant="text"
            onClick={() => scrollById("Projects", { block: "start" })}
          >
            <p className="tracking-widest">Projects</p>
          </Button>
          <Button
            size="large"
            color="inherit"
            className="!capitalize"
            variant="text"
            onClick={() => scrollById("About", { block: "start" })}
          >
            <p className="tracking-widest"> About</p>
          </Button>
          <Button
            size="large"
            color="inherit"
            className="!capitalize"
            variant="text"
            onClick={() => scrollById("Contact", { block: "start" })}
          >
            <p className="tracking-widest"> Contact</p>
          </Button>
        </div>
        <IconButton className="lg:!hidden" onClick={() => setOpen(true)}>
          <Menu />
        </IconButton>
      </nav>
      <div className="relative">
        <img src={img1} alt="" className="p-2" />

        <p className="absolute tracking-widest items-center flex gap-2 text-white left-[40%] top-[48%] text-lg lg:text-4xl">
          <span className="bg-black py-2 px-3 bg-opacity-80">BR</span>
          <span>Architects</span>
        </p>
        {/* <p className="absolute tracking-widest bg-black  text-white left-[40%] top-[48%] text-4xl">
          BR
        </p>
        <p className="absolute tracking-widest p-5 text-white left-[46%] top-[46%] text-4xl">
          Architects
        </p> */}
      </div>
      <h1 className="text-xl pl-7 pt-14 tracking-widest" id="Projects">
        Projects
      </h1>
      <div className="pl-6 pr-6 pt-3 pb-3">
        <Divider />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 p-6 relative">
        {tect.map((i) => (
          <img src={i.image} alt="" />
        ))}
        <p className="absolute text-white bg-black left-6 top-6 p-2">
          Summer House
        </p>
      </div>
      <h1 className="text-xl pl-7 pt-12 tracking-widest" id="About">
        About
      </h1>
      <div className="pl-7 pr-7 pt-4 pb-1">
        <Divider />
      </div>
      <p className="pl-7 pt-2 pr-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="grid lg:grid-cols-4 gap-4 p-6">
        {action.map((j) => (
          <div className="pt-4 flex flex-col gap-2">
            <img src={j.image} alt="" />
            <p className="text-xl pt-2">{j.namu}</p>
            <p className="font-light pt-2">{j.profession}</p>
            <p className="pt-2">{j.message}</p>
            <Button
              className="!capitalize !w-full"
              color="inherit"
              variant="contained"
            >
              Contact
            </Button>
          </div>
        ))}
      </div>
      <h1 className="text-xl pl-7 pt-12 tracking-widest" id="Contact">
        Contact
      </h1>
      <div className="pl-7 pr-7 pt-5 pb-1">
        <Divider />
      </div>
      <p className="pl-7 pt-2">
        Lets get in touch and talk about your next project.
      </p>
      <div className="pl-7 pt-3 flex flex-col gap-4 mr-5">
        <TextField
          className="w-full"
          placeholder="Name"
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          className="w-full"
          placeholder="Email"
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          className="w-full"
          placeholder="Subject"
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          className="w-full"
          placeholder="Comment"
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
      </div>
      <div className="pt-7 pl-7">
        <Button
          className="!capitalize !bg-black"
          color="warning"
          variant="contained"
        >
          Send Message
        </Button>
      </div>
      <img src={img2} alt="" className="pl-7 pr-5 pt-10 pb-2" />
      <div className="bg-black text-white p-6 flex justify-center">
        <p>Powered by w3.css</p>
      </div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List className="!w-56">
          <ListItemButton
            onClick={() => {
              scrollById("Projects", { block: "start" });
              setOpen(false);
            }}
          >
            Projects
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              scrollById("About", { block: "start" });
              setOpen(false);
            }}
          >
            About
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              scrollById("Contact", { block: "start" });
              setOpen(false);
            }}
          >
            Contact
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default BRArchitects;
