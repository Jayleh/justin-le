import React from 'react';

const WorkCard = ({
  location,
  dates,
  imageSrc,
  imageAlt,
  title,
  subTitle,
  description,
  hashtags
}) => {
  return (
    <article>
      <div className="row">
        <div className="col s12 l3 experience-time-place">
          <div className="location">
            <p>{location}</p>
          </div>
          <div className="date-range">
            <p>{dates}</p>
          </div>
        </div>
        <div className="col l9 experience-panel">
          <div className="experience-image">
            <img
              src={imageSrc}
              className="circle responsive-img"
              alt={imageAlt}
            />
          </div>
          <div className="position">
            <h4>
              {title} &mdash; {subTitle}
            </h4>
          </div>
          <div className="description">
            <p>
              {description}{' '}
              <span className="text-important">{` ${hashtags}`}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
