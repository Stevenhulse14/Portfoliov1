import { FC, useRef } from "react";
import { Typography, Button, Divider, Box, Stack } from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import Contactme from "./Contactme";
import Intro from "./Intro";
import TechnicalSkills from "./TechnicalSkills";
import Projects from "./Projects";

const buttonStyling = {
  backgroundColor: "white",
  color: "#FF5722",
  borderRadius: 5,
  padding: "10px 20px",
  transition: "background-color 0.2s",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: "lightblue", // Change to the shade of blue you prefer
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

const Profile = ({ name, bio, avatarUrl }) => {
  const tech = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  // This function is what I use to scroll to the ref of the section of this Portfolio Site
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Box>
      <Stack
        margin={2}
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        sx={{
          alignItems: "center",
          justifyContent: "right",
          paddingRight: "50px",
        }}
      >
        <Button
          variant="outlined"
          component="button"
          sx={buttonStyling}
          startIcon={<CodeIcon />}
          onClick={() => scrollToRef(tech)}
        >
          Tech
        </Button>
        <Button
          variant="outlined"
          component="button"
          endIcon={<ArrowForwardIcon />}
          sx={buttonStyling}
          onClick={() => scrollToRef(projects)}
        >
          Projects
        </Button>
      </Stack>
      <Intro name={name} bio={bio} avatarUrl={avatarUrl}></Intro>
      <Divider sx={{ my: 2 }} />
      <Typography ref={contact} variant="h6">
        Contact
      </Typography>
      <Contactme buttonStyling={buttonStyling} />
      <Divider sx={{ my: 2 }} />
      <Typography ref={tech} variant="h6">
        Technical Skills
      </Typography>
      <TechnicalSkills />

      <Divider sx={{ my: 2 }} />
      <Typography ref={projects} variant="h6">
        PROJECTS
      </Typography>
      <Projects buttonStyling={buttonStyling} />
    </Box>
  );
};

export default Profile;
