import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/naveen5635/ai-research-agent"
          h3="Ai Agent"
          p="Ai research agent"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/naveen5635/doczy"
          h3="Doczy"
          p="Chat with PDF"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Clipace"
          p="Adobe plugin"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Mtag"
          p="Fitness app"
        />
      </div>
    </section>
  );
}

export default Projects;
