import { Home } from "./home";
import { About } from "./about";
import { Work } from "./work";
import { Projects } from "./projects";
import { Contact } from "./contact";

export default function Body() {
  return (
    <div>
      <Home />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}
