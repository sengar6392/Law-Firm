import { Box, Typography } from "@mui/material";
import React from "react";
import messageLogo from "../../assets/Message 35.svg";
import "./heroSection.scss";
import profile from "../../assets/Image (2).png";
import profile2 from "../../assets/Image (3).png";
const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap:"2rem",
        px: "6rem",
        py: "6rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "66px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "147.523%",
          }}
        >
          You don’t have to Fight them Alone.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "162.523%",
            opacity: 0.3,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </Typography>
        <Box
          sx={{
            backgroundColor: "primary.main",
            p: "1rem",
            height: "44px",
            width: "438px",
            borderRadius: "43px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem", width: "70%", ml: "1rem" }}>
            <img
              className="message-logo"
              src={messageLogo}
              alt="message logo"
            />
            <input
              className="email-input"
              type="text"
              placeholder="Enter your email address"
            />
          </Box>
          <button className="btn">Let's Talk</button>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            height: "400px",
            width: "400px",
            backgroundColor: "secondary.main",
            borderRadius: "56px",
            position: "relative",
          }}
        >
          <img className="profile-img" src={profile} alt="profile" />
          <img className="profile-img2" src={profile2} alt="profile" />

        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
