import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHandshake, faStar } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="container">
        <div className="section-title">
          <h1>{t('aboutTitle')}</h1>
          <p>{t('aboutSubtitle')}</p>
        </div>

        <section className="story-section">
          <h2>{t('ourStory')}</h2>
          <p>{t('ourStoryText')}</p>
        </section>

        <section className="mission-section">
          <h2>{t('ourMission')}</h2>
          <p>{t('ourMissionText')}</p>
        </section>

        <section className="values-section">
          <h2>{t('ourValues')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <FontAwesomeIcon icon={faCheckCircle} className="value-icon" />
              <h3>{t('valueQuality')}</h3>
              <p>{t('valueQualityText')}</p>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faHandshake} className="value-icon" />
              <h3>{t('valueIntegrity')}</h3>
              <p>{t('valueIntegrityText')}</p>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faStar} className="value-icon" />
              <h3>{t('valueExcellence')}</h3>
              <p>{t('valueExcellenceText')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 