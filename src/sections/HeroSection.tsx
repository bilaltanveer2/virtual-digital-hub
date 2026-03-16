import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="section" id="top">
      <div className="blur-orb blur-orb--blue" style={{ width: 260, height: 260, top: -40, left: -40 }} />
      <div className="blur-orb blur-orb--cyan" style={{ width: 220, height: 220, top: 120, right: -40 }} />
      <div className="grid-2" style={{ position: 'relative', zIndex: 1 }}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}   
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
              Digital Marketing • Shopify • Paid Media
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 4vw, 3.3rem)',
                lineHeight: 1.1,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              Scale Your Business with{' '}
              <span
                style={{
                  background:
                    'linear-gradient(120deg, #60a5fa, #22d3ee, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Powerful Digital Marketing.
              </span>
            </h1>
            <p style={{ maxWidth: 520, color: '#cbd5f5', fontSize: 15, marginBottom: 28 }}>
              Shopify Development, Google Ads, Meta Ads, TikTok Ads &amp; complete digital growth solutions
              engineered for next-generation eCommerce brands.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 24 }}>
              <a 
                href="/start-project" 
                className="btn btn--primary" 
                style={{ 
                  background: 'linear-gradient(135deg, #a855f7, #6366f1)', 
                  boxShadow: '0 0 25px rgba(168, 85, 247, 0.45), 0 0 60px rgba(99, 102, 241, 0.35)',
                  border: '1px solid rgba(168, 85, 247, 0.4)'
                }}
              >
                Start Your Project
              </a>
              <a href="https://wa.me/923705978907" target="_blank" rel="noreferrer" className="btn btn--primary">
                Get Free Consultation
              </a>
              <a href="/services" className="btn btn--ghost">
                View Our Services
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: 13, color: '#9ca3af' }}>
              <div>
                <strong style={{ display: 'block', fontSize: 18, color: '#e5f0ff' }}>+$12M</strong>
                tracked client revenue
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 18, color: '#e5f0ff' }}>32+</strong>
                DTC &amp; Shopify brands scaled
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 18, color: '#e5f0ff' }}>3.8x</strong>
                average paid media ROAS
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div
            className="gradient-border neon-glow floating"
            style={{
              borderRadius: 30,
              padding: 1,
              background: 'radial-gradient(circle at 0 0, #22d3ee, #1d4ed8)',
            }}
          >
            <div
              style={{
                borderRadius: 28,
                background:
                  'radial-gradient(circle at 0 0, rgba(15,23,42,0.9), rgba(15,23,42,0.98) 45%, rgba(15,23,42,1))',
                padding: 22,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: -80,
                  background:
                    'radial-gradient(circle at 0 0, rgba(59,130,246,0.12), transparent 50%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.18), transparent 50%)',
                  opacity: 0.9,
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: 12, textTransform: 'uppercase', color: '#a5b4fc', marginBottom: 8 }}>
                  Live performance dashboard
                </p>
                <h2 style={{ fontSize: 18, marginBottom: 18 }}>Revenue &amp; ROAS in real time</h2>
                <div className="grid-stats">
                  <div>
                    <div
                      style={{
                        height: 130,
                        borderRadius: 16,
                        background:
                          'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(15,23,42,0.98))',
                        border: '1px solid rgba(148,163,184,0.35)',
                        padding: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(5,1fr)',
                          gap: 6,
                          alignItems: 'flex-end',
                          height: '75%',
                        }}
                      >
                        {[40, 65, 55, 90, 78].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                            style={{
                              transformOrigin: 'bottom',
                              borderRadius: 999,
                              background:
                                'linear-gradient(to top, #0f172a, rgba(59,130,246,0.15) 15%, #38bdf8)',
                              height: `${h}%`,
                            }}
                          />
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#9ca3af' }}>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 14,
                        border: '1px solid rgba(148,163,184,0.4)',
                        padding: 10,
                        background: 'rgba(15,23,42,0.96)',
                      }}
                    >
                      <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 4 }}>Shopify Revenue (30d)</p>
                      <p style={{ fontSize: 18, fontWeight: 600 }}>$486,920</p>
                      <p style={{ fontSize: 11, color: '#22c55e' }}>+142% vs. last 30d</p>
                    </div>
                    <div
                      style={{
                        borderRadius: 14,
                        border: '1px solid rgba(148,163,184,0.4)',
                        padding: 10,
                        background: 'rgba(15,23,42,0.96)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 8,
                        fontSize: 11,
                      }}
                    >
                      <div>
                        <p style={{ color: '#9ca3af' }}>Blended ROAS</p>
                        <p style={{ fontSize: 18, fontWeight: 600 }}>4.3x</p>
                      </div>
                      <div>
                        <p style={{ color: '#9ca3af' }}>Meta + Google</p>
                        <p style={{ fontSize: 18, fontWeight: 600 }}>3.7x</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 11,
                    color: '#9ca3af',
                  }}
                >
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: 999,
                        background: '#22c55e',
                      }}
                    />
                    Live campaigns across Google, Meta &amp; TikTok
                  </div>
                  <span>Data sync • Shopify, GA4, Ads Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

