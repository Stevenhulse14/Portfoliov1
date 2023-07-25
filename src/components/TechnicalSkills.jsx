import React from "react";
import { Typography, Grid, Paper, Box } from "@mui/material";
import {
  SiReact,
  SiRedux,
  SiDocker,
  SiDjango,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiHeroku,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiCsharp,
  SiSqlite,
  SiCplusplus,
  SiMongodb,
  SiMui,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { FaJava, FaBrain } from "react-icons/fa";
import {
  FcAlarmClock,
  FcAssistant,
  FcBinoculars,
  FcIdea,
  FcLike,
  FcMindMap,
  FcOrganization,
  FcReading,
  FcSportsMode,
  FcSupport,
  FcVoicePresentation,
} from "react-icons/fc";

const TechnicalSkills = () => {
  const tools = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
    { name: "Pandas", icon: SiPython, color: "#150458" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Heroku", icon: SiHeroku, color: "#430098" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Material UI", icon: SiMui, color: "#0081CB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "NextJS", icon: SiNextdotjs, color: "#000000" },
  ];
  const qualitys = [
    { name: "Hard Working", icon: FcSportsMode, color: "#FF6B6B" },
    { name: "Communication", icon: FcVoicePresentation, color: "#6BD4FF" },
    { name: "Teamwork", icon: FcOrganization, color: "#FFCE6B" },
    { name: "Problem Solving", icon: FcSupport, color: "#6BFFB8" },
    { name: "Creativity", icon: FcIdea, color: "#D46BFF" },
    { name: "Adaptability", icon: FcMindMap, color: "#FFA46B" },
    { name: "Time Management", icon: FcAlarmClock, color: "#6BFFD4" },
    { name: "Leadership", icon: FcAssistant, color: "#FFA86B" },
    { name: "Critical Thinking", icon: FaBrain, color: "#6B8EFF" },
    { name: "Organization", icon: FcBinoculars, color: "#FF6B8E" },
    { name: "Attention to Detail", icon: FcReading, color: "#6BFF91" },
    { name: "Self Motivation", icon: FcLike, color: "#FFFFFF" },
  ];
  const languages = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "SQL", icon: SiSqlite, color: "#003B57" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C#", icon: SiCsharp, color: "#9826AF" },
  ];

  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    margin: "2px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const iconStyle = {
    fontSize: "48px",
    color: "white",
  };

  return (
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Box
        className="gridContainer"
        sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
      >
        <Grid container my={4} rowSpacing={2} spacing={4} marginLeft="0px">
          <Grid item xs={4} className="Tools">
            <Typography
              variant="subtitle1"
              sx={{ paddingRight: "30px", marginRight: "25px" }}
            >
              Tools
            </Typography>
            <Grid container spacing={2} sx={{ margin: "auto" }}>
              {tools.map((tool, index) => (
                <Grid item xs={6} sm={4} md={3} key={index} sx={gridItemStyle}>
                  <Paper elevation={3} sx={{ backgroundColor: tool.color }}>
                    {React.createElement(tool.icon, { style: iconStyle })}
                  </Paper>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ fontSize: "0.5rem", fontWeight: "900" }}
                  >
                    {tool.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={4} className="Qualities">
            <Typography
              variant="subtitle1"
              sx={{ paddingRight: "30px", marginRight: "25px" }}
            >
              Qualities
            </Typography>
            <Grid container spacing={2} sx={{ margin: "auto" }}>
              {qualitys.map((quality, index) => (
                <Grid item xs={6} sm={4} md={3} sx={gridItemStyle} key={index}>
                  <Paper elevation={3} sx={{ backgroundColor: quality.color }}>
                    {React.createElement(quality.icon, { style: iconStyle })}
                  </Paper>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ fontSize: "0.5rem", fontWeight: "900" }}
                  >
                    {quality.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4} className="Language">
            <Typography
              variant="subtitle1"
              sx={{ paddingRight: "30px", marginRight: "25px" }}
            >
              Languages
            </Typography>
            <Grid container spacing={2} sx={{ margin: "auto" }}>
              {languages.map((language, index) => (
                <Grid item xs={6} sm={4} md={3} key={index} sx={gridItemStyle}>
                  <Paper elevation={3} sx={{ backgroundColor: language.color }}>
                    {React.createElement(language.icon, { style: iconStyle })}
                  </Paper>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ fontSize: "0.5rem", fontWeight: "900" }}
                  >
                    {language.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TechnicalSkills;
