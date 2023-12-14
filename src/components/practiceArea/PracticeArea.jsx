import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ImageCard from "../imageCard/ImageCard";
const cardData = [
  {
    img: "https://s3-alpha-sig.figma.com/img/c5e0/6b00/7c0b32a7459f3f93e948c826fb8285fa?Expires=1703462400&Signature=AvoLNZy8enxsynZrf4wdzPvfVyo9K8isKGLWIWAxTkjrwJEI0Nbl0xn9539SpHothq8e~p0GBNYMGBG89Cw-BwOK0bO-JMiSgKUERh4Oov3JhYCp5nOT5WSvMx~DAgDoXJmL-0523ItSydHqFKzIv9CpjIyDmNbN0~AuLprUFHQhU9QfgNctu~0NW-jJEh9bEOTJN3ou2cARDccg~E6d1lWFwmRvhJ1v~5aLtvZfCVubXHd6PTvaveK5JIcR8WTCZVkbR73YcqFKKZDtrQt9TzZHn1esVm2xA7ptP3XqQOM7EOV3mMUvj5Dx3YasaZLbQX7-5eSi3HtE7GzdRoQMFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "BUSSINESS LAW",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/0134/94ae/20fe77e2ba4511c0eac9a6a8e2e442e9?Expires=1703462400&Signature=dqY0Bn7rzJY-A8reQzXzVHoKq46mmvZDuNRRLJBapy3S9wegkHFwy1TswEDRdDywrJHUkW6auNepeocg4I11ku1~oNOQ0NWcjiaX-VGQcgsWP5uKBFWcsDrq9jELtAbFdTOLsfI5Dadbzol0q1PBtc2SXYcSuD8Zoly~oS3~cA7i9y-~h3AeZ4CvofG6aGCACDQYFRx14xfEVAYkhGdD7v6q3C0XqZseLbb7ZqZtJgjvzisBUwgeu3BiWQxbnFMwFJWLpEj-~ODgcWqFLY1caseV9Ch2x3bQKZP2jkz3C93M2QCKjZWb5bWpQzUTa6BNLmKEElNqwvu6~YZMvVlCqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Partnership LAW",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/0134/94ae/20fe77e2ba4511c0eac9a6a8e2e442e9?Expires=1703462400&Signature=dqY0Bn7rzJY-A8reQzXzVHoKq46mmvZDuNRRLJBapy3S9wegkHFwy1TswEDRdDywrJHUkW6auNepeocg4I11ku1~oNOQ0NWcjiaX-VGQcgsWP5uKBFWcsDrq9jELtAbFdTOLsfI5Dadbzol0q1PBtc2SXYcSuD8Zoly~oS3~cA7i9y-~h3AeZ4CvofG6aGCACDQYFRx14xfEVAYkhGdD7v6q3C0XqZseLbb7ZqZtJgjvzisBUwgeu3BiWQxbnFMwFJWLpEj-~ODgcWqFLY1caseV9Ch2x3bQKZP2jkz3C93M2QCKjZWb5bWpQzUTa6BNLmKEElNqwvu6~YZMvVlCqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REAL ESTATE LAW",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/967e/a809/6e48ac723c88ed39751352f5c9436c2a?Expires=1703462400&Signature=QtOWPfESASPfkekdU06X7IYJsJ-QLsfIup2nBwsgSWU7ScVOUc08Y386IyG1yUiuFqlp6AMWkbNpCzgcNg31aPzcOXqIdGY2f0yHyLmBUQC1kOneQWh81sX1M9G4PGOqXIcoQvILFVafEmsQSwyLXOw6zgtWC5dB3cNNPifTeRp6fir9iZQ4kMV6sXdi2hd8P3P5bMeMkosok5aDryKC8ui6Ivd7MAQjrv1v~xxwMfmwEQV9HAy1RSczJ3bqJt5kJzkzPeI2htrK7uJqnh5bTh-OdYyv7rZXfVDxERlapaHlgJff4WbL0L5sU41-AByF-eL1yE38XHjcQqxsEbggFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "BUSINESS LAW",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/67f6/5c6c/48e8eefdf399cab04f83a10d965770f1?Expires=1703462400&Signature=Xee3nxKbUMegVMRA2mvqXGG~c~BKtWUpd5-EkUjwvTcwSLfSdSNgsK-05KzOLHORm24qHeXFYdyd8Zsdp7FonVwJYktA4LMg6ULJ3GZ-mr~3ByXMb6Jfk1AI6eLmbCS3~bWhbwgcRKgUas-~BvmC7VaaStR2FAN4JehNlw752v8yciTP7oIvWrppZ8Qev9z4rdSqOPf5Cb8y-wpOWaoblTSxWRCXXVhDuthHDSeacyxgkz5Rz0DuBYobXvMlEjBBqW3jGMhlxKit-Lh87dtDni9NJZ2FbdlW68PyiSwVVGjMYN4dWtcMeet9ISVVwzkxzfOczg-eEbxFPI-75DdDYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "LANDLORD DISPUTES",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/68d0/8df3/8947e8d751a269f4d5965ea6d3152054?Expires=1703462400&Signature=SyOisC6NZWUR2QYw9su~-Xsh9jqBgVA6yJv2a~TyPX9IyZ5QQzQOiA2h6cpegVdk1vDjiqRyQVZZKpMBtc-R59IlQc3jiDkeBNE6t8kT~0aE6YwaVweP4LC7TA6imdr0OgTtOO~2N4q8uUsj1NSG6-ZP6F3rpUfDp35wIT~2xwk~wCQTITp9jEy9TrqthVPcQUL-2p7Bdny1JNTP~bLxtPF4BJOf29wGP8zUFTTE-yJjafFeHUvgvSOX7YwXUkOQKivMAMz8IxGuoN9xC5bxCcsp7WjvBzrmCI750OHnn2dzxvhxHRt5qFtw~lz6-xAXKCfElSU4wesJVtUbtdYZaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "ELDER ABUSE",
  },
];

const PracticeArea = () => {
  return (
    <Box sx={{ my: "4rem", px: "6rem" }}>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "54px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "143.023%",
          textAlign: "center",
        }}
      >
        Area of Practices
      </Typography>
      <Grid container spacing={2} sx={{ my: 4 }}>
        <Grid item xs={8}>
          <ImageCard
            title={cardData[0].title}
            backgroudImage={cardData[0].img}
          />
        </Grid>
        <Grid item xs={4}>
          <ImageCard
            title={cardData[1].title}
            backgroudImage={cardData[1].img}
          />
        </Grid>
        <Grid item xs={4}>
          <ImageCard
            title={cardData[2].title}
            backgroudImage={cardData[2].img}
          />
        </Grid>
        <Grid item xs={8}>
          <ImageCard
            title={cardData[3].title}
            backgroudImage={cardData[3].img}
          />
        </Grid>
        <Grid item xs={8}>
          <ImageCard
            title={cardData[4].title}
            backgroudImage={cardData[4].img}
          />
        </Grid>
        <Grid item xs={4}>
          <ImageCard
            title={cardData[5].title}
            backgroudImage={cardData[5].img}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PracticeArea;
