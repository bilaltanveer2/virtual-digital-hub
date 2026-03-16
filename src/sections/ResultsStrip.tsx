import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/client';
import type { ResultItem } from '../types';

const ResultsStrip = () => {
  const [items, setItems] = useState<ResultItem[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<ResultItem[]>('/results')
      .then((res) => setItems(res.data))
      .catch(() => {
        // fallback demo
        setItems([
          {
            id: 1,
            clientName: 'DTC Skincare Brand',
            projectType: 'Meta + TikTok Ads',
            beforeMetric: '$48k/mo',
            afterMetric: '$132k/mo',
            revenueGrowth: '+176%',
            roas: '3.9x',
            conversionIncrease: '+2.1 pts',
          },
        ]);
      });
  }, []);

  if (!items.length) return null;

  return (
    <section
      className="section section--tight"
      style={{
        background:
          'radial-gradient(circle at top, rgba(15,23,42,1), rgba(15,23,42,0.98) 45%, #020617 100%)',
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
          Client results
        </p>
        <h2 style={{ fontSize: 24, marginTop: 8, marginBottom: 6 }}>Proven performance, not vanity metrics</h2>
        <p style={{ fontSize: 14, color: '#9ca3af' }}>
          Every number is tracked, verified and tied back to real revenue.
        </p>
      </div>
      <div className="grid-cards">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="gradient-border"
            style={{
              borderRadius: 24,
              padding: 1,
            }}
          >
            <div
              style={{
                borderRadius: 22,
                background: 'rgba(15,23,42,0.96)',
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {item.imageUrls && item.imageUrls[0] && (
                <div
                  style={{
                    width: '100%',
                    borderRadius: 18,
                    overflow: 'hidden',
                    background: '#020617',
                  }}
                >
                  <img
                    src={item.imageUrls[0]}
                    alt={item.clientName}
                    style={{
                      width: '100%',
                      height: 180, // roughly 4x6 portrait feel
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                    onClick={() => setPreviewImage(item.imageUrls?.[0] ?? null)}
                  />
                </div>
              )}
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>{item.clientName}</h3>
                <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 4 }}>{item.projectType}</p>
                <p style={{ fontSize: 12, color: '#9ca3af' }}>
                  <strong>Before:</strong> {item.beforeMetric} &nbsp; | &nbsp; <strong>After:</strong> {item.afterMetric}
                </p>
              </div>
              <div style={{ fontSize: 12, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <span style={{ color: '#22c55e' }}>
                  Revenue growth: <strong>{item.revenueGrowth}</strong>
                </span>
                <span>
                  ROAS: <strong>{item.roas}</strong>
                </span>
                <span style={{ color: '#38bdf8' }}>
                  Conversion increase: <strong>{item.conversionIncrease}</strong>
                </span>
              </div>
              <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 4 }}>Results</p>
            </div>
          </motion.article>
        ))}
      </div>

      {previewImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            cursor: 'zoom-out',
          }}
          onClick={() => setPreviewImage(null)}
        >
          <button
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: 40,
              cursor: 'pointer',
              lineHeight: 1,
            }}
            onClick={() => setPreviewImage(null)}
          >
            &times;
          </button>
          <img
            src={previewImage}
            alt="Preview"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: 8,
              cursor: 'default',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ResultsStrip;

