import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Systems from "./components/Systems";
import About from "./components/about/About";
import Bosses from "./components/bosses/bosses";
import CallUs from "./components/callUs/CallUs";
import Experience from "./components/experience/Experience";
import Mission from "./components/mission/mission";
import Projects from "./components/projects/Projects";
import Structures from "./components/struchures/Structures";
import Team from "./components/team/Team";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Systems />
      <Mission />
      <Experience />
      <Team />
      <Bosses />
      <Structures />
      <Projects />
      <CallUs />
      <Footer />
    </div>
  );
}

export default App;
