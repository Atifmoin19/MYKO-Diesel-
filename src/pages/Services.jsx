import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faWrench, faOilCan, faCog } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Services.css';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: faTools,
      title: 'rotaryCROTitle',
      description: 'rotaryCROFullDesc',
    },
    {
      icon: faWrench,
      title: 'edcPumpTitle',
      description: 'edcPumpFullDesc',
    },
    {
      icon: faOilCan,
      title: 'nozzleServiceTitle',
      description: 'nozzleServiceFullDesc',
    },
    {
      icon: faCog,
      title: 'generalRepairsTitle',
      description: 'generalRepairsFullDesc',
    },
  ];

  return (
    <div className="services-page">
      <div className="container">
        <div className="section-title">
          <h1>{t('servicesPageTitle')}</h1>
          <p>{t('servicesPageSubtitle')}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <div className="service-content">
                <h2>{t(service.title)}</h2>
                <p>{t(service.description)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="service-details">
          <h2>{t('serviceDetails')}</h2>
          {services.map((service, index) => (
            <div key={`detail-${index}`} className="service-detail-item">
              <h3>{t(service.title)}</h3>
              <p>{t(service.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 