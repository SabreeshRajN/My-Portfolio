import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Certifications.css';
import { FaCertificate, FaEye } from 'react-icons/fa';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const certifications = [
    {
      title: 'NPTEL Certified: Cloud Computing',
      issuer: 'NPTEL',
      date: 'Issued',
      description: 'Comprehensive understanding of cloud computing concepts and technologies',
      certificateFile: '/certificates/NPTEL Cloud Computing.pdf',
      fileType: 'pdf'
    },
    {
      title: 'NPTEL Certified: Introduction to Machine Learning (Tamil)',
      issuer: 'NPTEL',
      date: 'Issued',
      description: 'Introduction to Machine Learning concepts and applications in Tamil',
      certificateFile: '/certificates/NPTEL Introduction to Machine Learning (Tamil).pdf',
      fileType: 'pdf'
    },
    {
      title: 'NPTEL Certified: Machine Learning ML',
      issuer: 'NPTEL',
      date: 'Issued',
      description: 'Advanced Machine Learning concepts and practical applications',
      certificateFile: '/certificates/NPTEL Machine Learning ML.pdf',
      fileType: 'pdf'
    },
    {
      title: 'Build Your Own Static Website',
      issuer: 'NxtWave',
      date: 'Issued Jun 2025',
      description: 'Created static websites using HTML5, CSS, Bootstrap and JavaScript',
      certificateFile: '/certificates/Static Website Certificate.pdf',
      fileType: 'pdf'
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'Issued Jun 2025',
      description: 'Foundational knowledge of cloud services and Microsoft Azure',
      certificateFile: '/certificates/Azure.pdf',
      fileType: 'pdf'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'Cognitive Class',
      date: 'Issued Sep 2023',
      description: 'Machine Learning fundamentals using Python programming language',
      certificateFile: '/certificates/Sabreesh Raj N 041 - Machine Learning with Python Certificate.pdf',
      fileType: 'pdf'
    },
    {
      title: 'Generative AI Mastery Workshop',
      issuer: 'NxtWave',
      date: 'Issued Aug 2025',
      description: 'Understanding and implementation of Generative AI technologies',
      certificateFile: '/certificates/open ai.png',
      fileType: 'image'
    },
    {
      title: 'Model Context Protocol (MCP) Workshop',
      issuer: 'NxtWave',
      date: 'Issued Aug 2025',
      description: 'Understanding and implementation of Model Context Protocol with Cursor',
      certificateFile: '/certificates/Nxtwave MCP Certificate.png',
      fileType: 'image'
    },
    {
      title: 'Build Your Own Responsive Website',
      issuer: 'NxtWave',
      date: 'Issued Jul 2025',
      description: 'Built responsive websites using HTML5, CSS Flexbox, and Bootstrap Framework',
      certificateFile: '/certificates/Responsive Website Certificate.pdf',
      fileType: 'pdf'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-description">{cert.description}</p>
                {cert.certificateFile && (
                  <button 
                    onClick={() => setSelectedCert(cert)} 
                    className="view-cert-btn"
                  >
                    <FaEye /> View Certificate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal - Rendered via Portal */}
      {selectedCert && ReactDOM.createPortal(
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              ×
            </button>
            <h3 className="cert-modal-title">{selectedCert.title}</h3>
            {selectedCert.fileType === 'pdf' ? (
              <div className="pdf-container">
                <iframe
                  src={`${selectedCert.certificateFile}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                  className="cert-pdf-viewer"
                  title={selectedCert.title}
                  type="application/pdf"
                />
                <a 
                  href={selectedCert.certificateFile} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="open-pdf-btn"
                >
                  📄 Open Full Certificate in New Tab
                </a>
              </div>
            ) : (
              <img
                src={selectedCert.certificateFile}
                alt={selectedCert.title}
                className="cert-image-viewer"
              />
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Certifications;
