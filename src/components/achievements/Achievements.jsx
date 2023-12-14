import { Box, Typography } from "@mui/material";
import React from "react";
import SuccessCard from "../successCard/SuccessCard";

const Achievements = () => {
  return (
    <Box sx={{px:"6rem",my:"2rem"}}>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "54px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "143.023%",
          textAlign:"center"
        }}
      >
        Why Choose us?
      </Typography>
      <Box sx={{display:'flex',justifyContent:"space-between",alignItems:"center",mt:"4rem"}}>
        <SuccessCard/>
        <SuccessCard/>
        <SuccessCard/>
      </Box>
    </Box>
  );
};

export default Achievements;
