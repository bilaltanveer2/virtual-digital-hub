import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Shopify & Web Development',
    body: 'Conversion-obsessed storefronts engineered for speed, UX, and profitability.',
    tags: ['Shopify', 'Headless', 'Landing Pages'],
  },
  {
    title: 'Paid Media: Google, Meta, TikTok',
    body: 'Full-funnel acquisition across search, social, and video with rigorous testing frameworks.',
    tags: ['Google Ads', 'Meta Ads', 'TikTok Ads'],
  },
  {
    title: 'SEO & Conversion Optimization',
    body: 'Technical SEO, content strategy and CRO to unlock compound growth beyond ads.',
    tags: ['SEO', 'CRO', 'Analytics'],
  },
];

const ServicesSnapshot = () => {
  return (
    <section className="section section--tight">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 26 }}>
        <div>
          <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
            What we do
          </p>
          <h2 style={{ fontSize: 26, marginTop: 8, marginBottom: 8 }}>Full-stack digital growth for modern brands</h2>
          <p style={{ maxWidth: 520, color: '#9ca3af', fontSize: 14 }}>
            From strategy to execution, Virtual Digital Hub partners with you to plan, build, and scale high-performing
            acquisition systems across Shopify, paid media, and lifecycle marketing.
          </p>
        </div>
        <a href="/services" className="btn btn--ghost">
          Explore all services
        </a>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: 18,
        }}
      >
        {cards.map((card) => (
          <motion.article
            key={card.title}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="gradient-border"
            style={{
              borderRadius: 20,
              background: 'rgba(15,23,42,0.9)',
              padding: 18,
            }}
          >
            <h3 style={{ fontSize: 17, marginBottom: 8 }}>{card.title}</h3>
            <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 12 }}>{card.body}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, fontSize: 11, color: '#a5b4fc' }}>
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '4px 9px',
                    borderRadius: 999,
                    background: 'rgba(30,64,175,0.6)',
                    border: '1px solid rgba(129,140,248,0.8)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSnapshot;

