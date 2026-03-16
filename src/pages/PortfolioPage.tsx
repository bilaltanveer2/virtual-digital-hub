import { useEffect, useState } from 'react';
import api from '../api/client';
import type { PortfolioItem } from '../types';

const PortfolioPage = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    api
      .get<PortfolioItem[]>('/portfolio')
      .then((res) => setItems(res.data))
      .catch(() =>
        setItems([
          {
            id: 1,
            title: 'High-AOV skincare brand',
            clientName: 'Nova Skin Co.',
            industry: 'Beauty & skincare',
            problem: 'Rising CAC and unstable Meta performance, with under-optimized landing experiences.',
            strategy:
              'Rebuilt account structure, introduced creative testing sprints, and deployed new quiz-style landers.',
            result:
              '3.9x blended ROAS, +61% revenue in 90 days, and improved retention via post-purchase flows.',
          },
        ]),
      );
  }, []);

  return (
    <section className="section">
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
          Case studies
        </p>
        <h1 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Selected projects &amp; campaigns</h1>
        <p style={{ fontSize: 15, color: '#cbd5f5', marginBottom: 24 }}>
          A sample of Shopify stores, performance campaigns and landing pages we&apos;ve designed, built and scaled.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 18,
          }}
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="gradient-border"
              style={{ borderRadius: 22, padding: 1 }}
            >
              <div
                style={{
                  borderRadius: 20,
                  background: 'rgba(15,23,42,0.96)',
                  padding: 18,
                  fontSize: 13,
                }}
              >
                {item.imageUrls && item.imageUrls.length > 0 && (
                  <div
                    style={{
                      marginBottom: 10,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit,minmax(60px,1fr))',
                      gap: 6,
                    }}
                  >
                    {item.imageUrls.slice(0, 5).map((url) => (
                      <img
                        key={url}
                        src={url}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: 72,
                          borderRadius: 10,
                          objectFit: 'cover',
                        }}
                      />
                    ))}
                  </div>
                )}
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>{item.title}</h2>
                <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 8 }}>
                  {item.clientName} • {item.industry}
                </p>
                <h3 style={{ fontSize: 13, marginBottom: 4 }}>Problem</h3>
                <p style={{ color: '#9ca3af', marginBottom: 8 }}>{item.problem}</p>
                <h3 style={{ fontSize: 13, marginBottom: 4 }}>Strategy</h3>
                <p style={{ color: '#9ca3af', marginBottom: 8 }}>{item.strategy}</p>
                <h3 style={{ fontSize: 13, marginBottom: 4 }}>Result</h3>
                <p style={{ color: '#22c55e' }}>{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;

