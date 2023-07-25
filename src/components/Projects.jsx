"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  colors,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const cardData = [
  {
    id: 7,
    title: "Promptopia",
    description:
      "A website that generates smart AI prompts for Developers and Writers",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689872936/projectIcons/Promptopia.png",
    githubUrl: "https://github.com/Stevenhulse14/Promptopia",
    deployed: "https://promptopia-pied-three.vercel.app/",
    youtube: "",
  },
  {
    id: 8,
    title: "Weather App",
    description: "A weather application that uses the OpenWeather API",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689972726/projectIcons/Weather.png",
    githubUrl: "https://github.com/Stevenhulse14/Weather-app",
    deployed: "https://magical-starship-452ab2.netlify.app/",
    youtube: "",
  },
  {
    id: 2,
    title: "Playdate",
    description:
      "Peer to peer playdate app where parents can connect, schedule playdates, and chat with other parents and their children.",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689872931/projectIcons/Playdate.png",
    githubUrl: "https://github.com/MASS-FSA/appPlayDate",
    deployed: "",
    youtube: "https://www.youtube.com/watch?v=9w1VLtK23V4",
  },
  {
    id: 1,
    title: "GoldenGorilla",
    description: "Ecommerce website for a selling pokemon cards",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689872960/projectIcons/Goldengorillas.png",
    githubUrl: "https://github.com/Golden-Gorillas/GraceShopper",
    deployed: "",
    youtube: "",
  },

  {
    id: 3,
    title: "BlackJack",
    description: "Is a blackjack game that I made using React.js",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "https://github.com/Stevenhulse14/",
    deployed: "",
    youtube: "",
  },
  {
    id: 4,
    title: "Weston Hospitality",
    description: "Real estate website for a hotel",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "https://github.com/Stevenhulse14/Westonhospitality",
    deployed: "",
    youtube: "",
  },
  {
    id: 5,
    title: "Cat API",
    description:
      "Cat API is a website that allows users to search for cat images and gifs.",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "https://github.com/Stevenhulse14/",
    deployed: "",
    youtube: "",
  },
  {
    id: 6,
    title: "Vegan Menu",
    description: "Menu for a vegan restaurant",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "https://github.com/Stevenhulse14/",
    deployed: "",
    youtube: "",
  },
  {
    id: 9,
    title: "WebResume",
    description: "A website that displays my resume",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "https://github.com/Stevenhulse14/",
    deployed: "",
    youtube: "",
  },
  // Add more card data objects here...
];

const Projects = ({ buttonStyling }) => {
  const [expanded, setExpanded] = useState(false);
  const accordionStyle = {
    "& .MuiAccordionSummary-root": {
      backgroundColor: "#FF5722", // Orange background for the accordion header
      color: "#FFFFFF", // White text color for the accordion header
      minHeight: "40px",
      "& .MuiAccordionSummary-content": {
        margin: "0", // Adjust spacing inside the accordion header
      },
      "& .MuiSvgIcon-root": {
        color: "#FFFFFF", // White color for the expand/collapse icon
      },
    },
    "& .MuiAccordionDetails-root": {
      backgroundColor: "rgba(0, 0, 0, 0.87)", // Light orange background for the accordion content
      padding: "4px", // Adjust padding inside the accordion content
    },
  };
  const handleAccordionChange = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <Grid container spacing={2} padding="20px" color="white">
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              width="100%"
              sx={{
                objectFit: "contain",
                backgroundColor: "rgba(0, 0, 0, 0.87)",
              }}
              image={card.imageUrl}
              alt={card.title}
            />
            <CardContent
              sx={{ background: "rgba(0, 0, 0, 0.87)", color: "whitesmoke" }}
            >
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Accordion
                key={card.id}
                expanded={expanded === card.id}
                onChange={() => handleAccordionChange(card.id)}
                sx={accordionStyle}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ backgroundColor: "black" }}
                >
                  <Typography variant="h6" color="white" sx={{ mb: 1 }}>
                    More Info
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.87)" }}
                >
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {card.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 1,
                }}
              >
                <Button
                  variant="contained"
                  sx={buttonStyling}
                  href={card.githubUrl}
                >
                  <GitHubIcon sx={{ color: "#333333" }} />
                </Button>
                <Button
                  variant="contained"
                  sx={buttonStyling}
                  href={card.youtube}
                >
                  <YouTubeIcon sx={{ color: "#FF0000" }} />
                </Button>
                <Button
                  variant="contained"
                  sx={buttonStyling}
                  href={card.deployed}
                >
                  <RocketLaunchIcon sx={{ color: "#1976D2" }} />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
