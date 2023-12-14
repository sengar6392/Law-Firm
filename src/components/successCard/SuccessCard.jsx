import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import giftLogo from "../../assets/Gift 1.svg";
import { Box } from "@mui/material";

const SuccessCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height:"377px",
        width:"359px",
        backgroundColor: "primary.main",
        color: "white.main",
        border: "1.4px solid rgba(255, 255, 255, 0.10)",
        py: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        borderRadius:"14px"
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
        }}
      >
        <img src={giftLogo} alt="" style={{ height: "50%", width: "50%" }} />
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
          98% Success Rate
        </Typography>
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
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "white.main",
            backgroundColor: "secondary.main",
            ml: "0.5rem",
            px:"2rem",
            py:"1rem",
            borderRadius:"23.5px"
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default SuccessCard;
