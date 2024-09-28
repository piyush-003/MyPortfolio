import styles from "./ProjectsStyles.module.css";
import travelmitra from "../../assets/travelmitra.png";
import Moviemitra from "../../assets/Moviemitra.png";
import Portfolio from "../../assets/portfolio.png";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={travelmitra}
          link="https://github.com/piyush-003/TravelMitra"
          h3="TravelMitra"
          p="Easy Destinations"
        />
        <ProjectCard
          src={Moviemitra}
          link="https://github.com/piyush-003/MovieMitra"
          h3="Moviemitra"
          p="Recommending Cinema"
        />
        <ProjectCard
          src={Portfolio}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Portfolio"
          p="My Portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
