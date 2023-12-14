import { Box, Typography } from "@mui/material";
import React from "react";

const Introduce = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "6rem",
        py: "2rem",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "54px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "161.523%",
          }}
        >
          Let’s Introduce Ourself
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          borderLeft: "1px solid #6A6A6A",
          px: "2rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "162.523%",
          }}
        >
          Criminal Lawyer
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "162.523%",
            opacity:0.3
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </Typography>
      </Box>
    </Box>
  );
};

export default Introduce;
