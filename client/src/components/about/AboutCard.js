import React from 'react';

import styles from './About.module.css';

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
    <article className={styles.article}>
      <div className={`row ${styles['article-row']}`}>
        <div className={`col s12 l3 ${styles['experience-time-place']}`}>
          <div className={styles.location}>
            <p className={`${styles.p} ${styles['p-experience-time-place']}`}>
              {location}
            </p>
          </div>
          <div className={styles['date-range']}>
            <p className={`${styles.p} text-light`}>{dates}</p>
          </div>
        </div>
        <div className={`col l9 ${styles['experience-panel']}`}>
          <div className={styles['experience-image-container']}>
            <img
              src={imageSrc}
              className={`circle responsive-img ${styles['experience-image']}`}
              alt={imageAlt}
            />
          </div>
          <div className={styles.position}>
            <h4 className={styles['h4-position']}>
              {title} &mdash; {subTitle}
            </h4>
          </div>
          <div className={styles.description}>
            <p className={`${styles.p} ${styles['p-description']} text-light`}>
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
