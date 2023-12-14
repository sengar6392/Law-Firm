import { Box, Typography } from "@mui/material";
import React from "react";
import ClientCard from "../clientCard/ClientCard";
const clientData = [
  {
    img: "https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1703462400&Signature=LOfpKKx~~BMBDCwCorFtql8kR4r4SvfUiYCSdbHdxXY6BYr3wTRuA5dN~3y5iXTnHzwnbOVsoANPplTI2l6v9b26WEBdaxDDdWX4-aJfM-K34t5nTc82dGDsaVJKvlV7ivuI8Ew-YVxsrBuccs1d-GTZ3QtT0SlGkSGhHrLIUCtA-iO7b57X-9q5IVsc0bqsp8NqQEBf~tXzNVX3SUc8MNfsAQPe0DB5LgeW06NzdfTVBfBxF3BBxlpMB0CfD~esP18xa7ptZTGY0Z30HOOFU3~M7uy14kQCyHQ037pRxaNAjcjIgTDJ1fShXeavoi8dedwNKy2I7rch8UEWSKZN0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Jane Cooper",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8fe7/ad6b/85c053224d98bfd7e680608c07f3c239?Expires=1703462400&Signature=aF1MPmnQHke357L9-PEUtxpzu27FGpSn8k59fyIcfwdSVXiuqVcbBvRTGS2OAtWIPd5iY7GhobTYgTlnsg8QZiEyX99RIrwrgKq7~dDIyTkVKdqSmqgtPih-53GAIXjFw-MY4L1DGq6AfFJRn2q1zOhRzeMBJKI8WOLMhxEjuv4jAF394Xb1WPWbFe6~-uhcQfdEiX4v9SM066fYok7KDMlGFOnqy914T3YbAdPwQ--4QFoTkmrMjJomuV~He5RH6Z6WNYbxXBMD77S6C2XVNlcVbkyzybEodeOp8R5uMIy2YjkNhH4QrCm697F1j4URGJhknDV7fCX8XUR6Nxl7bA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Devon Lane",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1703462400&Signature=l3nxlT78eYiXNsQ5k5bsYZFvQifDNV7oqiMErt~V7RX0-jLk19qWUx-hxnFqOvkfHpZjaz~4wuW3wDxTJQGlLmvnCPkhUAPaUylgbPcUKvXLGwZDOzBjYdGpUE10PCGcS42HRDWxbaJb8xkfkr-0UTJaTAtPMu3B1q67MQYflKDsA9~e8~sPaIImFNHEU9Qho0ZQAvPLFUeAdgyeGNL3un1f0LpwFz1F02mA3NDJXTyows~gZcWAm9nebBd646MsMNzmOZf~0uT8atV1FzGZpGTjD66WXbqpHdMSUZqH-hYvHrGv6jNM4z8jNXlIkJzhz49DlQhpXeg4mUq1-d1Dfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Robert Fox",
  },
];
const ClientReviews = () => {
  return (
    <Box sx={{ px: "6rem",my:"6rem" }}>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "54px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "143.023%",
          textAlign:"start",
          my:"4rem"
        }}
      >
        What says our happy Clients
      </Typography>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        {clientData.map((item) => (
          <ClientCard key={item.name} name={item.name} img={item.img} />
        ))}
      </Box>
    </Box>
  );
};

export default ClientReviews;
