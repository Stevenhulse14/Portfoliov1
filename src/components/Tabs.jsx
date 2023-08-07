import { Tab, Tabs, Box, Typography } from "@mui/material";
import { useState } from "react";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
function TabsAbout() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    //console.log(newTabIndex);
    setTabIndex(newTabIndex);
  };
  const tabStyling = {
    "& .MuiTab-root": {
      fontSize: "0.7rem", // Adjust the font size of the tab label
      minWidth: "auto", // Allow smaller tabs (optional)
      maxWidth: { sx: "100%", sm: 100 }, // Allow text to wrap (optional)
      padding: "6px 16px", // Adjust the padding to make the tabs more compact
      "&.Mui-selected": {
        backgroundColor: "#FF5722",
        color: "white",
        fontWeight: "bold",
        borderRadius: "30px",
      },
    },
    "& .MuiTab-wrapper": {
      flexDirection: "row", // Align the icon and label horizontally
      "& .MuiSvgIcon-root": {
        fontSize: "1rem", // Adjust the icon size
        marginRight: 4, // Add spacing between the icon and the text
        borderRadius: "50%", // Make the icon background circular
        backgroundColor: "orange", // Set the background color for the icon
        color: "white", // Set the icon color
        padding: 4, // Adjust padding for the icon background
      },
      "&.Mui-selected .MuiSvgIcon-root": {
        backgroundColor: "white",
        color: "orange",
      },
    },
    "@media (max-width: 600px)": {
      "& .MuiTabs-root": {
        justifyContent: "center", // Center the tabs horizontally
      },
    },
    "& .MuiTabs-flexContainer": {
      width: "100%", // Set the width to 100% to prevent extending to the end
    },
  };
  return (
    <Box
      sx={{
        color: "whitesmoke",
        paddingBottom: "20px",
        maxWidth: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row", // You can adjust the breakpoints here based on your needs
        },
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        sx={tabStyling}
        TabIndicatorProps={{
          sx: { backgroundColor: "white", borderRadius: "30px" },
        }} // Add this line to change the indicator color
        orientation={"vertical"}
      >
        <Tab
          //label="About"
          icon={<LooksOneIcon />}
          sx={{ color: "whitesmoke", fontSize: "0.80rem" }}
        />
        <Tab
          //label="Projects"
          icon={<LooksTwoIcon />}
          sx={{ color: "whitesmoke", fontSize: "0.80rem" }}
        />
        <Tab
          //label="Contact"
          icon={<Looks3Icon />}
          sx={{ color: "whitesmoke", fontSize: "0.80rem" }}
        />
      </Tabs>
      <Box
        sx={{ margin: 2, height: "90%", maxWidth: { xs: "100%", sm: "50%" } }}
      >
        {tabIndex === 0 && (
          <Box textAlign="center" alignContent="center" height="100%">
            <Typography
              alignContent="center"
              sx={{
                fontSize: "0.85rem",
                fontWeight: "bold",
                height: "200px",
                overflow: "auto",
              }}
            >
              I am a Software Developer and a proud Army Veteran currently
              stationed in NYC. As an individual, I embody a fun, outgoing, and
              free-spirited nature. During my leisure time, you can find me
              indulging in activities such as listening to music, coding,
              playing video games, and embarking on little NYC adventures. While
              my profile effectively showcases my resume and projects, I view
              this section as an opportunity to express aspects that go beyond
              what my resume can convey. A core aspect of my personality is an
              insatiable passion for learning. I am constantly seeking new
              knowledge and skills in various domains. This field is an ideal
              fit for me, as I thrive on continuous challenges and exploration
              of emerging technologies to incorporate into my projects and tech
              stack.
            </Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box height="100%">
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: "bold",
                height: "200px",
                overflow: "auto",
              }}
            >
              This insatiable curiosity and passion for learning has driven me
              to explore and acquire a diverse skill set. I have immersed myself
              in various creative endeavors, including creating beats with
              Serato Studio and crafting beautiful animations using DaVinci
              Resolve. Additionally, my proficiency extends to video editing,
              having worked with OBS Studio and various editing software.
              Drawing and designing have been a lifelong passion, as I have been
              honing my artistic skills since childhood and was selected for
              multiple art programs during my youth, though I ultimately chose a
              different path. I emphasize these qualities because I firmly
              believe they converge in my pursuit of becoming an exceptional
              full-stack developer with a strong focus on frontend development
              and UX/UI design. My diverse background has instilled in me a
              unique perspective and creative problem-solving approach that I
              bring to my coding and design projects.
            </Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box height="100%">
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: "bold",
                height: "200px",
                overflow: "auto",
              }}
            >
              My goal is to leverage these multifaceted skills to not only excel
              as a developer but also to enhance the user experience and craft
              aesthetically appealing interfaces. I am excited to channel my
              passion into creating innovative and user-centric applications
              that leave a lasting impact on the digital landscape. Thank you
              for considering my diverse skill set and how it contributes to my
              vision of becoming an amazing fullstack dev while striving to be
              outstanding frontend developer and UX/UI designer.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default TabsAbout;
