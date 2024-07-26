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
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import Image from "next/image";
import { Search } from "@mui/icons-material";

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
const DemoPaper2 = styled(Paper)(({ theme }) => ({
  width: 550,
  height: 80,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  border: "1px solid #e1e3e5",
  borderRadius: "8px",
  margin: "auto",
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

      <div square>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Image
            src={profilePic}
            height={50}
            width={50}
            className="rounded-full"
          />
          <Search
            sx={{ backgroundColor: "#f0f2f5", color: "black", m: 0 }}
            className="rounded-"
          >
            <SearchIconWrapper>
              <SearchIcon className="text-black" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Box></Box>
      </div>
    </div>
  );
}
