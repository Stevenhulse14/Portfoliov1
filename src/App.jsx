import { Profile } from "./components";
import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      title: "Playdate",
      description: "lorum",
      demoLink: "www.google.com",
      codeUrl: "www.indeed.com",
    },
  ];
  return (
    <>
      <Profile
        name="STEVEN HULSE"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        avatarUrl="Profilepic.jpeg"
        resumeUrl="/path"
        projects={data}
      />
    </>
  );
}

export default App;
