import { Button, Stack, Typography } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

/**
    * This component renders a list of buttons that link to my social media profiles.
    - Todo add youtube link
 */
function Contactme({ buttonStyling }) {
  return (
    <>
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        sx={{ margin: "auto", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="outlined"
          href="https://www.linkedin.com/in/steven-hulse/"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LinkedInIcon />}
          sx={buttonStyling}
        >
          LinkedIn
        </Button>
        <Button
          //variant="outlined"
          href="https://github.com/Stevenhulse14"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon sx={{ color: "black" }} />}
          sx={buttonStyling}
        >
          GitHub
        </Button>
        <Button
          //variant="outlined"
          href="https://www.youtube.com/watch?v=ABpkoRevDxY"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<YouTubeIcon sx={{ color: "red" }} />}
          sx={buttonStyling}
        >
          YouTube
        </Button>
      </Stack>
    </>
  );
}

export default Contactme;
