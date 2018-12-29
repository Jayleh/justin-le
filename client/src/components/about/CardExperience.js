import React from 'react';

const WorkCard = props => {
  return (
    <article>
      <div className="row">
        <div className="col s12 l3 experience-time-place">
          <div className="location">
            <p>{props.location}</p>
          </div>
          <div className="date-range">
            <p>{props.dates}</p>
          </div>
        </div>
        <div className="col l9 experience-panel">
          <div className="experience-image">
            <img
              src={props.imageSrc}
              className="circle responsive-img"
              alt={props.imageAlt}
            />
          </div>
          <div className="position">
            <h4>
              {props.title} &mdash; {props.subTitle}
            </h4>
          </div>
          <div className="description">
            <p>
              {props.description}{' '}
              <span className="text-important">{` ${props.hashtags}`}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
