import { Helmet } from 'react-helmet-async';
import type { FormEvent } from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_82akh6o', // Service ID
        'template_tf2xqmc', // Template ID
        formRef.current,
        'VerbKgFEHte6euhPE', // Public key
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
        },
        () => {
          setStatus('error');
        },
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Virtual Digital Hub</title>
        <meta name="description" content="Get in touch with Virtual Digital Hub for a free growth consultation. We help brands scale with expert digital marketing." />
        <meta name="keywords" content="Contact Virtual Digital Hub, free growth consultation, digital marketing agency contact, hire Shopify experts, hire Google ads experts, book marketing consultation, digital strategy phone call, WhatsApp marketing consultant, hire Meta ads specialist, eCommerce scaling help, online business consultation, marketing agency support, B2B marketing consultation, B2C marketing help, revenue growth conversation, Shopify developer contact, get free SEO audit, connect with digital marketers, discuss ad spend, marketing agency email, virtual digital Hub phone number, hire TikTok ads agency, performance marketing query, business growth partnership, schedule strategy session, expert digital marketers, online business help, advertising ROI consultation" />
        <meta property="og:title" content="Contact Us | Virtual Digital Hub" />
        <meta property="og:description" content="Book your free growth consultation with Virtual Digital Hub today." />
      </Helmet>
      <section className="section">
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
          Contact
        </p>
        <h1 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Book your free growth consultation</h1>
        <p style={{ fontSize: 15, color: '#cbd5f5', marginBottom: 24 }}>
          Share a bit about your business and goals. We&apos;ll review your current setup and get back within one
          business day with next steps.
        </p>
        <div className="grid-content">
          <form
            ref={formRef}
            className="gradient-border"
            style={{ borderRadius: 22, padding: 1 }}
            onSubmit={handleSubmit}
          >
            <div
              style={{
                borderRadius: 20,
                background: 'rgba(15,23,42,0.96)',
                padding: 18,
                display: 'grid',
                gap: 12,
                fontSize: 13,
              }}
            >
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    marginTop: 4,
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 10px',
                    color: '#e5f0ff',
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  placeholder="hello@virtualdigitalhb.com"
                  style={{
                    width: '100%',
                    marginTop: 4,
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 10px',
                    color: '#e5f0ff',
                  }}
                />
              </div>
              <div>
                <label htmlFor="business">Business / company</label>
                <input
                  id="business"
                  name="company"
                  placeholder="Brand / company name"
                  style={{
                    width: '100%',
                    marginTop: 4,
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 10px',
                    color: '#e5f0ff',
                  }}
                />
              </div>
              <div>
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals, current monthly revenue and channels you use today."
                  style={{
                    width: '100%',
                    marginTop: 4,
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 10px',
                    color: '#e5f0ff',
                    resize: 'vertical',
                  }}
                />
              </div>
              <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit inquiry'}
              </button>
              {status === 'success' && (
                <p style={{ fontSize: 12, color: '#22c55e' }}>Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p style={{ fontSize: 12, color: '#f97373' }}>Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
          <div style={{ fontSize: 14, color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div>
              <h2 style={{ fontSize: 18 }}>Other ways to reach us</h2>
              <p>Email: virtualdigitalhb@gmail.com</p>
              <p>WhatsApp: +92 3705978907</p>
            </div>
            <div>
              <h3 style={{ fontSize: 15, marginTop: 8 }}>Socials</h3>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
                <a href="https://www.instagram.com/virtual_digital_hb?igsh=bTE5azdwbTV2Mmxj" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/virtual-digital-hub-2727b83b7?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a href="https://www.tiktok.com/@virtualdigitalhub" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"></path></svg>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactPage;

