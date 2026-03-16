import { Helmet } from 'react-helmet-async';
import StaffSection from '../sections/StaffSection';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Virtual Digital Hub - Digital Growth Studio</title>
        <meta name="description" content="Learn more about Virtual Digital Hub, our mission, vision, and how we help brands achieve predictable revenue through strategic digital marketing." />
        <meta name="keywords" content="About Virtual Digital Hub, Digital Growth Studio, top digital marketing agency, eCommerce growth partners, digital marketing experts, best performance marketing team, Shopify experts Pakistan, Google Ads certified professionals, Meta Ads strategists, digital marketing mission and vision, data-backed marketing decisions, high-converting digital experiences, full-funnel marketing strategies, escape guesswork marketing, proactive marketing partner, digital strategy for eCommerce, scale online revenue, CAC reduction strategies, LTV improvement, return on ad spend ROAS, eCommerce tech-first marketing, lean marketing team, digital marketing agency culture, brand scaling experts, digital marketing innovation, transparency in marketing analytics, digital marketing results" />
        <meta property="og:title" content="About Us | Virtual Digital Hub" />
        <meta property="og:description" content="Discover the team and mission behind Virtual Digital Hub's success in scaling brands." />
      </Helmet>
      <section className="section">
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
            About Virtual Digital Hub
          </p>
          <h1 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Who we are</h1>
          <p style={{ fontSize: 15, color: '#cbd5f5', marginBottom: 18 }}>
            Virtual Digital Hub is a digital growth studio focused on helping ambitious brands turn traffic into
            predictable revenue. We combine world-class media buying, creative strategy, and technical execution across
            Shopify and web to build acquisition systems that compound over time.
          </p>
          <div className="grid-content" style={{ marginTop: 32 }}>
            <div>
              <h2 style={{ fontSize: 20, marginBottom: 8 }}>Our Mission</h2>
              <p style={{ fontSize: 14, color: '#9ca3af' }}>
                To help brands escape guesswork marketing and grow through data-backed decisions, high-converting
                experiences, and full-funnel strategies — not random tactics. We exist to be the partner we wish we had
                when we were on the brand side: proactive, transparent, and relentlessly focused on outcomes.
              </p>
              <h2 style={{ fontSize: 20, marginBottom: 8, marginTop: 24 }}>Our Vision</h2>
              <p style={{ fontSize: 14, color: '#9ca3af' }}>
                A world where every ambitious business, regardless of size, can access the same caliber of digital
                strategy and execution used by the top 1% of eCommerce brands.
              </p>
            </div>
            <div
              className="gradient-border"
              style={{
                borderRadius: 24,
                padding: 1,
              }}
            >
              <div
                style={{
                  borderRadius: 22,
                  background: 'rgba(15,23,42,0.98)',
                  padding: 18,
                  fontSize: 13,
                  color: '#9ca3af',
                }}
              >
                <h3 style={{ fontSize: 16, marginBottom: 10 }}>Why brands choose Virtual Digital Hub</h3>
                <ul style={{ paddingLeft: 18, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li>Senior-level strategy on every account — no handoffs to junior teams.</li>
                  <li>Obsessed with numbers: CAC, LTV, MER, AOV, payback periods and cohort behavior.</li>
                  <li>Full transparency across creative, media, landing pages, and analytics.</li>
                  <li>Tech-first mindset: tracking, attribution and reporting built in from day one.</li>
                  <li>Lean, fast-moving team that acts as an extension of your own.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StaffSection />
    </>
  );
};

export default AboutPage;

