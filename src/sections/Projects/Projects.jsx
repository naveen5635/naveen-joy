import styles from './ProjectsStyles.module.css';
import aiagent from '../../assets/ai-agent.jpg';
import chatpdf from '../../assets/chat-pdf.jpg';
import clipace from '../../assets/clipace.jpg';
import mtag from '../../assets/mtag.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={aiagent}
          link="https://github.com/naveen5635/ai-research-agent"
          h3="Ai Agent"
          p="Ai research agent"
        />
        <ProjectCard
          src={chatpdf}
          link="https://github.com/naveen5635/doczy"
          h3="Doczy"
          p="Chat with PDF"
        />
        <ProjectCard
          src={clipace}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Clipace"
          p="Adobe plugin"
        />
        <ProjectCard
          src={mtag}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Mtag"
          p="Fitness app"
        />
      </div>
    </section>
  );
}

export default Projects;
