import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './StartProjectPage.css';

const services = [
  'Website Development',
  'Shopify Store Development',
  'E-commerce Store Setup',
  'Digital Marketing',
  'Facebook & Google Ads',
  'SEO Optimization',
  'Full Digital Growth Package',
];

const budgets = ['$100 – $300', '$300 – $700', '$700 – $1500', '$1500+'];
const timelines = ['ASAP', '1–2 Weeks', '1 Month', 'Flexible'];

export default function StartProjectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Format WhatsApp Message
    const text = `*New Project Request – Virtual Digital Hub*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company}
*Service Needed:* ${formData.service}
*Budget:* ${formData.budget}
*Timeline:* ${formData.timeline}
*Project Details:* ${formData.description}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/923705978907?text=${encodedText}`;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: `Phone / WhatsApp: ${formData.phone}\nWebsite: ${formData.website || 'N/A'}\nService Needed: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.description}`
    };

    emailjs
      .send(
        'service_82akh6o',
        'template_tf2xqmc',
        templateParams,
        'VerbKgFEHte6euhPE'
      )
      .then(
        () => {
          setStatus('success');
          setFormData({
            name: '', email: '', phone: '', company: '', website: '', service: '', budget: '', timeline: '', description: ''
          });
          window.open(whatsappUrl, '_blank');
        },
        () => {
          setStatus('error');
          window.open(whatsappUrl, '_blank');
        }
      );
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Start Your Project | Virtual Digital Hub</title>
        <meta name="description" content="Ready to scale your business? Request a free strategy call and start your digital growth project with Virtual Digital Hub." />
        <meta name="keywords" content="Start digital marketing project, hire digital growth studio, request strategy call, scale my business online, digital marketing quotation, Shopify development cost, hire eCommerce agency, Google ads management pricing, Meta ads campaign start, digital marketing proposal, online growth strategy, eCommerce scaling project, hire Shopify experts, performance marketing quote, B2B lead generation project, B2C eCommerce marketing, digital agency onboarding, start SEO project, custom website development, targeted ads campaign, digital marketing budget, eCommerce growth consultation, hire TikTok ads agency, online revenue growth project, digital advertising services, marketing agency partnership, scale Shopify store, digital marketing gameplan, hire a marketing team, best digital marketing packages, affordable Shopify development, premium eCommerce agency, request marketing proposal, hire Facebook ads manager, outsource Google Ads management, digital marketing retainer cost, performance based marketing agency, ROI focused marketing, digital campaign setup, eCommerce marketing strategy call, hire SEO experts, start local SEO campaign, digital media scaling plan, how to scale an eCommerce brand, online business growth plan, digital consultation booking, Virtual Digital Hub project pricing" />
        <meta property="og:title" content="Start Your Project | Virtual Digital Hub" />
        <meta property="og:description" content="Scale your business with powerful Digital Marketing, Shopify Development, and Web Development solutions." />
      </Helmet>
      <div className="start-project">
        {/* 1. HERO SECTION */}
        <section className="sp-hero">
        <div className="sp-hero__bg-glow"></div>
        <motion.div 
          className="sp-hero__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="sp-hero__title">
            Start Your Project With <span className="sp-text-gradient">Virtual Digital Hub</span>
          </h1>
          <p className="sp-hero__subtitle">
            Scale your business with powerful Digital Marketing, Shopify Development, and Web Development solutions.
          </p>
          <button className="sp-btn sp-btn--glow" onClick={() => document.getElementById('project-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Free Strategy Call
          </button>
          <p className="sp-hero__trust">
            Helping modern brands scale with data-driven digital strategies.
          </p>
        </motion.div>
      </section>

      {/* 2. PROCESS SECTION */}
      <section className="sp-process section-padding">
        <motion.div 
          className="sp-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="sp-section-title">How Our Process Works</h2>
          <div className="sp-process__grid">
            {[
              { step: '01', title: 'Submit Project Request', desc: 'Fill out our quick form below to give us details about your project.' },
              { step: '02', title: 'Free Strategy Consultation', desc: 'We review your request and schedule a call to understand your needs.' },
              { step: '03', title: 'Custom Strategy & Proposal', desc: 'We craft a tailored game-plan and proposal designed to hit your goals.' },
              { step: '04', title: 'Launch, Optimize & Scale', desc: 'We execute the strategy, launch your project, and optimize for growth.' }
            ].map((item, index) => (
              <motion.div 
                className="sp-process__card glass-card" 
                key={index}
                whileHover={{ y: -10, boxShadow: '0 0 25px rgba(0, 229, 255, 0.4)' }}
              >
                <div className="sp-process__step glow-text">{item.step}</div>
                <h3 className="sp-process__card-title">{item.title}</h3>
                <p className="sp-process__card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. PROJECT FORM SECTION */}
      <section id="project-form" className="sp-form-section section-padding">
        <motion.div 
          className="sp-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="sp-section-title">Project Request Form</h2>
          <div className="sp-form-wrapper glass-card form-glow">
            <form onSubmit={handleSubmit} className="sp-form">
              <div className="sp-form__row">
                <div className="sp-form__group">
                  <label>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                <div className="sp-form__group">
                  <label>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
              </div>

              <div className="sp-form__row">
                <div className="sp-form__group">
                  <label>Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" />
                </div>
                <div className="sp-form__group">
                  <label>Business / Company Name *</label>
                  <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="Acme Corp" />
                </div>
              </div>

              <div className="sp-form__group">
                <label>Website URL (optional)</label>
                <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://yourwebsite.com" />
              </div>

              <div className="sp-form__row">
                <div className="sp-form__group">
                  <label>Service Needed *</label>
                  <select name="service" required value={formData.service} onChange={handleChange}>
                    <option value="" disabled>Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="sp-form__group">
                  <label>Project Budget *</label>
                  <select name="budget" required value={formData.budget} onChange={handleChange}>
                    <option value="" disabled>Select a budget</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div className="sp-form__group">
                <label>Project Timeline *</label>
                <select name="timeline" required value={formData.timeline} onChange={handleChange}>
                  <option value="" disabled>Select a timeline</option>
                  {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="sp-form__group">
                <label>Project Description *</label>
                <textarea 
                  name="description" 
                  required 
                  rows={5} 
                  value={formData.description} 
                  onChange={handleChange} 
                  placeholder="Tell us about your project goals, features you need, etc."
                ></textarea>
              </div>

              <div className="sp-form__group">
                <label className="sp-file-upload">
                  <span>Upload Reference Files (Optional)</span>
                  <input type="file" multiple />
                </label>
              </div>

              <button type="submit" className="sp-btn sp-btn--glow sp-btn--full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit Project Request'}
              </button>
              {status === 'success' && (
                <p style={{ fontSize: 13, color: '#22c55e', marginTop: 12, textAlign: 'center' }}>Project request sent. Redirecting to WhatsApp...</p>
              )}
              {status === 'error' && (
                <p style={{ fontSize: 13, color: '#f97373', marginTop: 12, textAlign: 'center' }}>There was an error sending the email, but redirecting to WhatsApp...</p>
              )}
            </form>
          </div>
        </motion.div>
      </section>

      {/* 4. WHY CHOOSE US & 5. CLIENT TRUST */}
      <section className="sp-features section-padding">
        <motion.div 
          className="sp-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="sp-section-title">Why Choose Us</h2>
          <div className="sp-features__grid">
            {['Shopify & E-commerce Experts', 'Performance Marketing Specialists', 'High Converting Websites', 'Data Driven Growth Strategy'].map((feature, i) => (
              <div className="sp-feature-card glass-card" key={i}>
                <div className="sp-feature-icon">❖</div>
                <h4>{feature}</h4>
              </div>
            ))}
          </div>

          <div className="sp-stats">
            <div className="sp-stat">
              <div className="sp-stat__num glow-text">32+</div>
              <div className="sp-stat__label">Shopify brands scaled</div>
            </div>
            <div className="sp-stat">
              <div className="sp-stat__num glow-text">3.8x</div>
              <div className="sp-stat__label">Average ROAS</div>
            </div>
            <div className="sp-stat">
              <div className="sp-stat__num glow-text">$120K+</div>
              <div className="sp-stat__label">Tracked client revenue</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="sp-final-cta section-padding">
        <div className="sp-particles"></div>
        <motion.div 
          className="sp-container sp-final-cta__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Ready to scale your business?</h2>
          <button className="sp-btn sp-btn--glow sp-btn--large" onClick={() => document.getElementById('project-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Your Project Today
          </button>
        </motion.div>
      </section>
    </div>
    </>
  );
}
