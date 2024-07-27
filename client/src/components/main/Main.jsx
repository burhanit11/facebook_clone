"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";
import profilePic from "../../../public/images/profile-picture.webp";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import VideocamIcon from "@mui/icons-material/Videocam";
import Image from "next/image";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon,
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 600,
  height: 80,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  display: "flex",
  alignItems: "center",
  border: "1px solid #e1e3e5",
  borderRadius: "5px",
}));

export default function Main() {
  return (
    <div>
      <Stack direction="column" spacing={2} className="my-4">
        <DemoPaper square>
          <IconButton
            size="large "
            color="primary"
            sx={{ bgcolor: "#f0f2f5", p: 1, m: 1 }}
          >
            <AddIcon />
          </IconButton>
          <div>
            <h1 className="text-black font-semibold">Create Story</h1>
            <p className="text-grayColor2">Share a photo or write something.</p>
          </div>
        </DemoPaper>
      </Stack>

      <div className="shadow-lg border-2 rounded-lg w-[95%] mx-auto px-2">
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            p: 2,
          }}
        >
          <Image
            src={profilePic}
            height={50}
            width={50}
            className="rounded-full"
          />
          <div className="bg-grayColor mx-2 p-4 rounded-full w-full text-xl">
            Whats on your mind, Burhan?
          </div>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", p: 2, gap: 2 }}>
          <div className="flex items-center">
            <VideocamIcon fontSize={"large"} color="error" />{" "}
            <span className="text-xl font-medium">Live video</span>{" "}
          </div>
          <div className="flex items-center">
            <PhotoLibraryIcon fontSize={"large"} color="success" />{" "}
            <span className="text-xl font-medium">Photo/video</span>{" "}
          </div>
          <div className="flex items-center">
            <MoodIcon fontSize={"large"} color="warning" />
            <span className="text-xl font-medium">Feeling/Activity</span>{" "}
          </div>
        </Box>
      </div>
      <div className="shadow-lg border-2 rounded-lg w-[95%] mx-auto px-2 mt-5">
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Image
            src={profilePic}
            height={60}
            width={60}
            className="rounded-full"
          />
          <div className="mx-2 rounded-full w-full p-2 ">
            <h1 className="text-xl font-medium">
              Burhan . <span className="text-primary">Follow</span>{" "}
            </h1>
            <p className="text-lg">
              Recommended post ·{" "}
              <span className="text-grayColor2">3 days ago</span>
            </p>
          </div>
        </Box>
        <Divider />
        <Box sx={{ display: "flex" }}>
          <Image src={profilePic} />
        </Box>
      </div>
    </div>
  );
}
