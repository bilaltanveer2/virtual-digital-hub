const LeadMagnet = () => {
  return (
    <section
      className="section section--tight"
      style={{
        maxWidth: 840,
        textAlign: 'center',
      }}
    >
      <div
        className="gradient-border neon-glow"
        style={{
          borderRadius: 32,
          padding: 1,
        }}
      >
        <div
          style={{
            borderRadius: 30,
            background:
              'radial-gradient(circle at 0 0, rgba(15,23,42,0.96), rgba(15,23,42,1))',
            padding: 28,
          }}
        >
          <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
            Free growth roadmap
          </p>
          <h2 style={{ fontSize: 24, marginTop: 10, marginBottom: 8 }}>
            Get a custom digital growth plan in under 48 hours
          </h2>
          <p style={{ fontSize: 14, color: '#9ca3af', maxWidth: 520, margin: '0 auto 18px' }}>
            Share your brand, metrics and goals — we’ll map a clear, data-backed plan for scaling via Shopify, paid
            media, and lifecycle channels.
          </p>
          <form
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              justifyContent: 'center',
              marginTop: 8,
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your best email"
              style={{
                minWidth: 220,
                maxWidth: 260,
                borderRadius: 999,
                border: '1px solid rgba(148,163,184,0.6)',
                background: 'rgba(15,23,42,0.96)',
                padding: '9px 14px',
                fontSize: 13,
                color: '#e5f0ff',
              }}
            />
            <button type="submit" className="btn btn--primary">
              Send me the roadmap
            </button>
          </form>
          <p style={{ fontSize: 11, color: '#64748b', marginTop: 8 }}>No spam. Just one actionable game-plan.</p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;

