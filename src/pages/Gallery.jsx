import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();

  // Placeholder image data (replace with actual images)
  const images = {
    work: [
      '/images/gallery/work1.jpg',
      '/images/gallery/work2.jpg',
      '/images/gallery/work3.jpg',
    ],
    facility: [
      '/images/gallery/facility1.jpg',
      '/images/gallery/facility2.jpg',
      '/images/gallery/facility3.jpg',
    ],
    equipment: [
      '/images/gallery/equipment1.jpg',
      '/images/gallery/equipment2.jpg',
      '/images/gallery/equipment3.jpg',
    ],
  };

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="section-title">
          <h1>{t('galleryTitle')}</h1>
          <p>{t('gallerySubtitle')}</p>
        </div>

        <section className="gallery-section">
          <h2>{t('workImages')}</h2>
          <div className="gallery-grid">
            {images.work.map((image, index) => (
              <div key={`work-${index}`} className="gallery-item">
                <img src={image} alt={`Work ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h2>{t('facilityImages')}</h2>
          <div className="gallery-grid">
            {images.facility.map((image, index) => (
              <div key={`facility-${index}`} className="gallery-item">
                <img src={image} alt={`Facility ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h2>{t('equipmentImages')}</h2>
          <div className="gallery-grid">
            {images.equipment.map((image, index) => (
              <div key={`equipment-${index}`} className="gallery-item">
                <img src={image} alt={`Equipment ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery; 