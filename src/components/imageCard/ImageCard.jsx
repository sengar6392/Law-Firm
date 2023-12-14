import { Box, Typography } from "@mui/material";
import React from "react";
import "./imageCard.scss";
import rectImg from "../../assets/Rectangle 3652.png";
const ImageCard = ({ backgroudImage, title }) => {
  return (
    <Box
      sx={{
        borderRadius: "14px",
        height: "20rem",
        background:
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.60) 65%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
        position: "relative",
        filter:""
      }}
    >
      <img className="card-img" src={backgroudImage} alt="" />
      <Typography
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translate(-50%)",
          fontFamily: "Inter",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ImageCard;
