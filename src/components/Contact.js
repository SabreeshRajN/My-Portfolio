import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // EmailJS configuration
    const serviceId = 'service_9fjlyl6';
    const notificationTemplateId = 'template_4rx1epi'; // Template for notification to you
    const autoReplyTemplateId = 'template_autoreply'; // Template for auto-reply to sender
    const publicKey = 'QeKSJYo0WYtQhMphl';

    // Template parameters for notification email (to you)
    const notificationParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Sabreesh Raj Nagarajan',
    };

    // Template parameters for auto-reply email (to sender)
    const autoReplyParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: 'Sabreesh Raj Nagarajan',
    };

    // Send notification email to you
    emailjs.send(serviceId, notificationTemplateId, notificationParams, publicKey)
      .then((response) => {
        console.log('Notification email sent!', response.status, response.text);
        
        // Try to send auto-reply email to the sender (optional)
        emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey)
          .then((autoReplyResponse) => {
            console.log('Auto-reply email sent!', autoReplyResponse.status, autoReplyResponse.text);
            setSubmitStatus('success');
            alert('Thank you for your message! I will get back to you soon. ✅\n\nYou will receive a confirmation email shortly.');
            setFormData({ name: '', email: '', message: '' });
          })
          .catch((autoReplyError) => {
            console.warn('Auto-reply failed (template may not exist):', autoReplyError);
            // Still show success since notification was sent
            setSubmitStatus('success');
            alert('Thank you for your message! I will get back to you soon. ✅');
            setFormData({ name: '', email: '', message: '' });
          });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitStatus('error');
        alert('Oops! Something went wrong. Please try again or email me directly at sabreeshrajnagarajan@gmail.com');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>sabreeshrajnagarajan@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Dindigul, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/sabreeshrajnagarajan</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/sabreeshrajnagarajan/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/SabreeshRajN" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
