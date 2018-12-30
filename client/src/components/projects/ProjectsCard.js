import React from 'react';

const ProjectsCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  techStack,
  webSiteLink,
  gitHubLink
}) => {
  const renderWebSiteLink = webSiteLink => {
    return (
      <a
        href={webSiteLink}
        target="_blank"
        className="waves-effect waves-light btn-small"
        rel="noopener noreferrer"
      >
        Take a look
      </a>
    );
  };

  const renderGitHubLink = gitHubLink => {
    return (
      <a
        className="valign-wrapper"
        href={gitHubLink}
        target="_blank"
        style={{ margin: 0 }}
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
    );
  };

  return (
    <li>
      <div className="card">
        <div className="card-content">
          <figure>
            <div>
              <img src={imageSrc} alt={imageAlt} />
            </div>
            <figcaption>
              <h4>{title}</h4>
              <p>
                {description} <span>({techStack})</span>
              </p>
              <div className="action-links">
                {renderWebSiteLink(webSiteLink)}
                {renderGitHubLink(gitHubLink)}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </li>
  );
};

export default ProjectsCard;
