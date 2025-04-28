import "./Projects.css";
function ProjectCard(
    {projectName,
    projectDescription,
    imageUrl,
    projectGithubUrl}) {
  return (
    <div className="project-card">
        <div className="image-container">
            <a href={projectGithubUrl} className="project-external-link" target="_blank" rel="noreferrer noopener">
                <img src={imageUrl} alt={projectName} className="project-image" loading="lazy" />
            </a>
        </div>
        <div className="project-details-container">
        <h2 className="project-heading">
            {projectName}
        </h2>
        <p className="project-details">
            {projectDescription}
        </p>
        <a href={projectGithubUrl} className="project-live-link" target="_blank" rel="noreferrer noopener">
            View live
        </a>
        </div>
    </div>
  )
}

export default ProjectCard