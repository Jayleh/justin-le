import React from 'react';

const ProjectsTestCard = ({
  imageSrc,
  imageAlt,
  title,
  webSiteLink,
  gitHubLink,
  description,
  techStack
}) => {
  const renderWebSiteLink = webSiteLink => {
    return (
      <div>
        <a
          href={webSiteLink}
          className="waves-effect waves-light btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take A Look
        </a>
      </div>
    );
  };

  const renderGitHubLink = gitHubLink => {
    return (
      <div>
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" />
        </a>
      </div>
    );
  };

  return (
    <figure className="effect-julia">
      <img src={imageSrc} alt={imageAlt} />
      <figcaption>
        <h2>
          {title}
          {/* Passionate <span>Julia</span> */}
        </h2>
        <div>
          <p>{description}</p>
          <p>{techStack}</p>
          <div className="action-links valign-wrapper">
            {renderWebSiteLink(webSiteLink)}
            {renderGitHubLink(gitHubLink)}
          </div>
        </div>
        {/* <a href="#">View more</a> */}
      </figcaption>
    </figure>
  );
};

export default ProjectsTestCard;
