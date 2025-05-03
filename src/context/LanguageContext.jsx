import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    // Common
    logoText: 'MYKO Diesel',
    
    // Header
    home: 'Home',
    gallery: 'Gallery',
    about: 'About',
    services: 'Services',
    contact: 'Contact',

    // Hero Section
    heroTitle: 'Expert Diesel Service Solutions',
    heroSubtitle: 'Professional diesel service and repair solutions for all your needs',
    getInTouch: 'Get in Touch',

    // Services Section
    ourServices: 'Our Services',
    servicesSubtitle: 'Comprehensive diesel service solutions for your vehicles',
    rotaryCRO: 'Rotary CRO Service',
    rotaryCRODesc: 'Expert service for rotary CRO systems with precision and care.',
    edcPump: 'EDC Pump Work',
    edcPumpDesc: 'Professional EDC pump maintenance and repair services.',
    nozzleService: 'Nozzle Service',
    nozzleServiceDesc: 'Specialized nozzle service and calibration for optimal performance.',
    generalRepairs: 'General Diesel Repairs',
    generalRepairsDesc: 'Comprehensive diesel engine repair and maintenance services.',

    // Why Choose Us Section
    whyChooseUs: 'Why Choose Us',
    whyChooseUsSubtitle: 'Experience the difference with our professional service',
    expertTeam: 'Expert Team',
    expertTeamDesc: 'Our experienced technicians provide the best service in the industry.',
    qualityService: 'Quality Service',
    qualityServiceDesc: 'We use the latest technology and best practices for all our services.',
    quickService: 'Quick Service',
    quickServiceDesc: 'Fast and efficient service without compromising on quality.',
    customerSupport: 'Customer Support',
    customerSupportDesc: '24/7 customer support for all your diesel service needs.',

    // Brands Section
    premiumPartners: 'Our Premium Partners',
    partnersSubtitle: 'Working with the best brands in the industry',
    premiumPartner: 'Premium Partner',

    // Footer
    aboutUs: 'About Us',
    footerAboutText: 'MYKO Diesel Service is your trusted partner for all diesel-related services. We provide expert solutions for your diesel engine needs with professional service and quality workmanship.',
    contactInfo: 'Contact Info',
    address: 'Police Station, TP Nagar, Basantpur, Gorakhpur, Uttar Pradesh 273005',
    phoneNumber: '+91 9593870722',
    email: 'mkdiesel0786@gmail.com',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    copyright: '',
    rightsReserved: 'All rights reserved',

    // Gallery Page
    galleryTitle: 'Our Gallery',
    gallerySubtitle: 'Take a look at our work and facilities',
    workImages: 'Work Images',
    facilityImages: 'Facility Images',
    equipmentImages: 'Equipment Images',

    // About Page
    aboutTitle: 'About Us',
    aboutSubtitle: 'Your Trusted Diesel Service Partner',
    ourStory: 'Our Story',
    ourStoryText: 'MYKO Diesel Service has been serving the automotive industry for over a decade. We started with a vision to provide high-quality diesel services with utmost professionalism and technical expertise.',
    ourMission: 'Our Mission',
    ourMissionText: 'To provide exceptional diesel service solutions while maintaining the highest standards of quality, integrity, and customer satisfaction.',
    ourValues: 'Our Values',
    valueQuality: 'Quality',
    valueQualityText: 'We never compromise on the quality of our services.',
    valueIntegrity: 'Integrity',
    valueIntegrityText: 'We conduct our business with honesty and transparency.',
    valueExcellence: 'Excellence',
    valueExcellenceText: 'We strive for excellence in everything we do.',

    // Services Page
    servicesPageTitle: 'Our Services',
    servicesPageSubtitle: 'Comprehensive Diesel Solutions',
    serviceDetails: 'Service Details',
    rotaryCROTitle: 'Rotary CRO Service',
    rotaryCROFullDesc: 'Our expert technicians provide comprehensive service for rotary CRO systems, ensuring optimal performance and efficiency. We use state-of-the-art equipment for precise calibration and testing.',
    edcPumpTitle: 'EDC Pump Service',
    edcPumpFullDesc: 'Professional EDC pump maintenance, repair, and calibration services. We handle all types of electronic diesel control systems with expertise.',
    nozzleServiceTitle: 'Nozzle Service',
    nozzleServiceFullDesc: 'Complete nozzle service including cleaning, calibration, and performance testing. We ensure your injectors work at peak efficiency.',
    generalRepairsTitle: 'General Diesel Repairs',
    generalRepairsFullDesc: 'Comprehensive diesel engine repair and maintenance services including diagnostics, troubleshooting, and regular maintenance.',

    // Contact Page
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in Touch with Us',
    visitUs: 'Visit Us',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    businessHours: 'Business Hours',
    businessHoursText: 'Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Closed',
    sendMessage: 'Send Message',
    formName: 'Your Name',
    formEmail: 'Your Email',
    formPhone: 'Phone Number',
    formSubject: 'Subject',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    locationMap: 'Our Location'
  },
  hi: {
    // Common
    logoText: 'मायको डीजल',
    
    // Header
    home: 'होम',
    gallery: 'गैलरी',
    about: 'हमारे बारे में',
    services: 'सेवाएं',
    contact: 'संपर्क',

    // Hero Section
    heroTitle: 'विशेषज्ञ डीजल सेवा समाधान',
    heroSubtitle: 'आपकी सभी जरूरतों के लिए पेशेवर डीजल सेवा और मरम्मत समाधान',
    getInTouch: 'संपर्क करें',

    // Services Section
    ourServices: 'हमारी सेवाएं',
    servicesSubtitle: 'आपके वाहनों के लिए व्यापक डीजल सेवा समाधान',
    rotaryCRO: 'रोटरी सीआरओ सेवा',
    rotaryCRODesc: 'सटीकता और देखभाल के साथ रोटरी सीआरओ सिस्टम के लिए विशेषज्ञ सेवा।',
    edcPump: 'ईडीसी पंप कार्य',
    edcPumpDesc: 'पेशेवर ईडीसी पंप रखरखाव और मरम्मत सेवाएं।',
    nozzleService: 'नोजल सेवा',
    nozzleServiceDesc: 'इष्टतम प्रदर्शन के लिए विशेष नोजल सेवा और कैलिब्रेशन।',
    generalRepairs: 'सामान्य डीजल मरम्मत',
    generalRepairsDesc: 'व्यापक डीजल इंजन मरम्मत और रखरखाव सेवाएं।',

    // Why Choose Us Section
    whyChooseUs: 'हमें क्यों चुनें',
    whyChooseUsSubtitle: 'हमारी पेशेवर सेवा के साथ अंतर का अनुभव करें',
    expertTeam: 'विशेषज्ञ टीम',
    expertTeamDesc: 'हमारे अनुभवी तकनीशियन उद्योग में सर्वश्रेष्ठ सेवा प्रदान करते हैं।',
    qualityService: 'गुणवत्तापूर्ण सेवा',
    qualityServiceDesc: 'हम सभी सेवाओं के लिए नवीनतम तकनीक और सर्वोत्तम प्रथाओं का उपयोग करते हैं।',
    quickService: 'त्वरित सेवा',
    quickServiceDesc: 'गुणवत्ता से समझौता किए बिना तेज और कुशल सेवा।',
    customerSupport: 'ग्राहक सहायता',
    customerSupportDesc: 'आपकी सभी डीजल सेवा जरूरतों के लिए 24/7 ग्राहक सहायता।',

    // Brands Section
    premiumPartners: 'हमारे प्रीमियम पार्टनर्स',
    partnersSubtitle: 'उद्योग के सर्वश्रेष्ठ ब्रांड्स के साथ काम करना',
    premiumPartner: 'प्रीमियम पार्टनर',

    // Footer
    aboutUs: 'हमारे बारे में',
    footerAboutText: 'मायको डीजल सर्विस आपकी सभी डीजल संबंधित सेवाओं के लिए आपका विश्वसनीय साथी है। हम पेशेवर सेवा और गुणवत्तापूर्ण कार्य के साथ आपकी डीजल इंजन जरूरतों के लिए विशेषज्ञ समाधान प्रदान करते हैं।',
    contactInfo: 'संपर्क जानकारी',
    address: 'पुलिस स्टेशन, टीपी नगर, बसंतपुर, गोरखपुर, उत्तर प्रदेश 273005',
    phoneNumber: '+91 9593870722',
    email: 'mkdiesel0786@gmail.com',
    quickLinks: 'त्वरित लिंक्स',
    followUs: 'हमें फॉलो करें',
    copyright: '',
    rightsReserved: 'सर्वाधिकार सुरक्षित',

    // Gallery Page
    galleryTitle: 'हमारी गैलरी',
    gallerySubtitle: 'हमारे काम और सुविधाओं को देखें',
    workImages: 'कार्य चित्र',
    facilityImages: 'सुविधा चित्र',
    equipmentImages: 'उपकरण चित्र',

    // About Page
    aboutTitle: 'हमारे बारे में',
    aboutSubtitle: 'आपका विश्वसनीय डीजल सेवा पार्टनर',
    ourStory: 'हमारी कहानी',
    ourStoryText: 'मायको डीजल सर्विस एक दशक से ऑटोमोटिव उद्योग की सेवा कर रहा है। हमने उच्चतम पेशेवर और तकनीकी विशेषज्ञता के साथ उच्च गुणवत्ता वाली डीजल सेवाएं प्रदान करने के दृष्टिकोण के साथ शुरुआत की।',
    ourMission: 'हमारा मिशन',
    ourMissionText: 'गुणवत्ता, ईमानदारी और ग्राहक संतुष्टि के उच्चतम मानकों को बनाए रखते हुए असाधारण डीजल सेवा समाधान प्रदान करना।',
    ourValues: 'हमारे मूल्य',
    valueQuality: 'गुणवत्ता',
    valueQualityText: 'हम अपनी सेवाओं की गुणवत्ता से कभी समझौता नहीं करते।',
    valueIntegrity: 'ईमानदारी',
    valueIntegrityText: 'हम ईमानदारी और पारदर्शिता के साथ अपना व्यवसाय करते हैं।',
    valueExcellence: 'उत्कृष्टता',
    valueExcellenceText: 'हम हर काम में उत्कृष्टता के लिए प्रयास करते हैं।',

    // Services Page
    servicesPageTitle: 'हमारी सेवाएं',
    servicesPageSubtitle: 'व्यापक डीजल समाधान',
    serviceDetails: 'सेवा विवरण',
    rotaryCROTitle: 'रोटरी सीआरओ सेवा',
    rotaryCROFullDesc: 'हमारे विशेषज्ञ तकनीशियन रोटरी सीआरओ सिस्टम के लिए व्यापक सेवा प्रदान करते हैं, जो इष्टतम प्रदर्शन और दक्षता सुनिश्चित करते हैं। हम सटीक कैलिब्रेशन और परीक्षण के लिए अत्याधुनिक उपकरणों का उपयोग करते हैं।',
    edcPumpTitle: 'ईडीसी पंप सेवा',
    edcPumpFullDesc: 'पेशेवर ईडीसी पंप रखरखाव, मरम्मत और कैलिब्रेशन सेवाएं। हम विशेषज्ञता के साथ सभी प्रकार के इलेक्ट्रॉनिक डीजल नियंत्रण प्रणालियों को संभालते हैं।',
    nozzleServiceTitle: 'नोजल सेवा',
    nozzleServiceFullDesc: 'सफाई, कैलिब्रेशन और प्रदर्शन परीक्षण सहित पूर्ण नोजल सेवा। हम सुनिश्चित करते हैं कि आपके इंजेक्टर उच्चतम दक्षता पर काम करें।',
    generalRepairsTitle: 'सामान्य डीजल मरम्मत',
    generalRepairsFullDesc: 'डायग्नोस्टिक्स, समस्या निवारण और नियमित रखरखाव सहित व्यापक डीजल इंजन मरम्मत और रखरखाव सेवाएं।',

    // Contact Page
    contactTitle: 'संपर्क करें',
    contactSubtitle: 'हमसे संपर्क करें',
    visitUs: 'हमसे मिलें',
    callUs: 'कॉल करें',
    emailUs: 'ईमेल करें',
    businessHours: 'कार्य समय',
    businessHoursText: 'सोमवार - शनिवार: सुबह 9:00 - शाम 6:00\nरविवार: बंद',
    sendMessage: 'संदेश भेजें',
    formName: 'आपका नाम',
    formEmail: 'आपका ईमेल',
    formPhone: 'फोन नंबर',
    formSubject: 'विषय',
    formMessage: 'संदेश',
    formSubmit: 'संदेश भेजें',
    locationMap: 'हमारा स्थान'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key, params = {}) => {
    const translation = translations[language][key] || key;
    if (params) {
      return Object.entries(params).reduce((acc, [key, value]) => {
        return acc.replace(`{${key}}`, value);
      }, translation);
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 