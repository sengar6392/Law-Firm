import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ClientCard = ({ img, name, bio }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "300px",
        width: "40%",
        backgroundColor: "primary.main",
        color: "white.main",
        border: "1.4px solid rgba(255, 255, 255, 0.10)",
        py: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        borderRadius: "14px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffff",
          height: "4rem",
          width: "4rem",
          borderRadius: "50%",
          ml: "1rem",
          overflow:"hidden"
        }}
      >
        <img src={img} alt={name} style={{ height: "100%", width: "100%" }} />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography>Ceo of Hunt</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "162.523%",
            color: "white.main",
            opacity: 0.3,
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClientCard;
