import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/client';
import type { Testimonial } from '../types';

const TestimonialsStrip = () => {
  const [items, setItems] = useState<Testimonial[]>([]);

  useEffect(() => {
    api
      .get<Testimonial[]>('/testimonials')
      .then((res) => setItems(res.data))
      .catch(() =>
        setItems([
          {
            id: 1,
            clientName: 'Sarah Lee',
            company: 'Nova Skin Co.',
            rating: 5,
            quote:
              'Virtual Digital Hub rebuilt our Shopify funnel and media strategy. We scaled from 1.4x to 4.1x blended ROAS within 90 days.',
          },
        ]),
      );
  }, []);

  if (!items.length) return null;

  return (
    <section className="section section--tight">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, marginBottom: 20 }}>
        <div>
          <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
            Client stories
          </p>
          <h2 style={{ fontSize: 24, marginTop: 8, marginBottom: 6 }}>Brands that trust Virtual Digital Hub</h2>
          <p style={{ fontSize: 14, color: '#9ca3af' }}>Real operators. Real results. No outsourced fluff.</p>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: 'minmax(280px, 1fr)',
          gap: 16,
          overflowX: 'auto',
          paddingBottom: 4,
        }}
      >
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="gradient-border"
            style={{
              borderRadius: 20,
              background: 'rgba(15,23,42,0.96)',
              padding: 18,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '999px',
                  background:
                    'radial-gradient(circle at 0 0, #38bdf8, #1d4ed8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                }}
              >
                {item.clientName.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 500 }}>{item.clientName}</div>
                <div style={{ fontSize: 12, color: '#9ca3af' }}>{item.company}</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: '#e5f0ff', marginBottom: 8 }}>“{item.quote}”</p>
            <div style={{ fontSize: 12, color: '#facc15' }}>
              {'★'.repeat(item.rating)}
              {'☆'.repeat(5 - item.rating)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsStrip;

