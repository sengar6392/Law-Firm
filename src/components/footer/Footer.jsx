import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/Group 10386.svg";
import icon1 from "../../assets/Icon.svg";
import icon2 from "../../assets/Icon (1).svg";
import icon3 from "../../assets/Icon (2).svg";
import icon4 from "../../assets/Icon (3).svg";
const Footer = () => {
  return (
    <Box
      sx={{
        px: "6rem",
        py: "1rem",
        backgroundColor: "black.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={logo} alt="" />
        </Box>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">Attorneys</li>
          <li className="nav-link">Practice Areas</li>
          <li className="nav-link">About Us</li>
        </ul>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Box>
            <img src={icon1} alt="" />
          </Box>
          <Box>
            <img src={icon2} alt="" />
          </Box>
          <Box>
            <img src={icon3} alt="" />
          </Box>
          <Box>
            <img src={icon4} alt="" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent:"center",
          alignItems: "center",
          my:"6rem",
          gap:"4rem"
        }}
      >
        <Typography>© 2020 Acme. All right reserved.</Typography>
        <Typography>Privacy Policy</Typography>
        <Typography>Terms of Service</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
