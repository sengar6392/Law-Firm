import { Box } from "@mui/material";
import React from "react";
import logo from "../../assets/Group 10386.svg";
import "./navbar.scss"
const NavBar = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:"center",px:"6rem",py:"1rem",backgroundColor:"black.main"}}>
      <Box>
        <img src={logo} alt="" />
      </Box>
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">Attorneys</li>
        <li className="nav-link">Practice Areas</li>
        <li className="nav-link">About Us</li>
      </ul>
      <button className="contact-now-btn">Contact Now</button>
    </Box>
  );
};

export default NavBar;
