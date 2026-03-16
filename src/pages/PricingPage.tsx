import { useEffect, useState } from 'react';
import api from '../api/client';
import type { PricingTier } from '../types';

const defaultTiers: PricingTier[] = [
  {
    id: 1,
    tier: 'Starter',
    price: '$1,500 / mo',
    features: ['1 core channel (Google or Meta)', 'Campaign setup & management', 'Monthly reporting'],
  },
  {
    id: 2,
    tier: 'Growth',
    price: '$3,000 / mo',
    features: [
      '2–3 channels (Google, Meta, TikTok)',
      'Landing page support & CRO',
      'Weekly reporting & strategy calls',
    ],
    highlight: true,
  },
  {
    id: 3,
    tier: 'Premium',
    price: 'Custom',
    features: [
      'Full-funnel growth (paid + lifecycle + SEO)',
      'Dedicated strategist & creative support',
      'Custom reporting & experiments roadmap',
    ],
  },
];

const PricingPage = () => {
  const [tiers, setTiers] = useState<PricingTier[]>(defaultTiers);

  useEffect(() => {
    api
      .get<PricingTier[]>('/pricing')
      .then((res) => res.data.length && setTiers(res.data))
      .catch(() => undefined);
  }, []);

  return (
    <section className="section">
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
          Pricing
        </p>
        <h1 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Simple, aligned pricing</h1>
        <p style={{ fontSize: 15, color: '#cbd5f5', marginBottom: 24 }}>
          Engagements are designed around your goals, margins and risk tolerance. Below are example packages — we&apos;ll
          tune scope and structure together.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 18,
          }}
        >
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className="gradient-border"
              style={{
                borderRadius: 22,
                padding: 1,
                transform: tier.highlight ? 'scale(1.02)' : undefined,
              }}
            >
              <div
                style={{
                  borderRadius: 20,
                  background: tier.highlight ? 'rgba(15,23,42,0.98)' : 'rgba(15,23,42,0.94)',
                  padding: 18,
                  fontSize: 13,
                }}
              >
                {tier.highlight && (
                  <div
                    style={{
                      fontSize: 11,
                      color: '#22c55e',
                      marginBottom: 4,
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                    }}
                  >
                    Most popular
                  </div>
                )}
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>{tier.tier} Package</h2>
                <p style={{ fontSize: 20, marginBottom: 10 }}>{tier.price}</p>
                <ul style={{ paddingLeft: 18, marginTop: 0, marginBottom: 12 }}>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn--primary">
                  Talk to our team
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;

