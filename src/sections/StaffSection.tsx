import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/client';
import type { StaffMember } from '../types';

const StaffSection = () => {
  const [items, setItems] = useState<StaffMember[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<StaffMember[]>('/staff')
      .then((res) => setItems(res.data))
      .catch(() =>
        setItems([
          {
            id: 1,
            name: 'Team Member',
            post: 'Growth Strategist',
            experience: '5+ years experience',
            photoUrl: 'https://via.placeholder.com/400x500?text=Virtual+Digital+HB',
          },
        ]),
      );
  }, []);

  return (
    <section className="section section--tight">
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
          Our team
        </p>
        <h2 style={{ fontSize: 24, marginTop: 8, marginBottom: 6 }}>Meet the people behind the results</h2>
        <p style={{ fontSize: 14, color: '#9ca3af' }}>
          Experienced specialists across Shopify, paid media, creative, and CRO.
        </p>
      </div>

      <div className="grid-cards">
        {items.map((m, index) => (
          <motion.article
            key={String(m.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="gradient-border"
            style={{ borderRadius: 22, padding: 1 }}
          >
            <div
              style={{
                borderRadius: 20,
                background: 'rgba(15,23,42,0.96)',
                padding: 14,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div style={{ borderRadius: 18, overflow: 'hidden', background: '#020617' }}>
                  <img
                    src={m.photoUrl}
                    alt={m.name}
                    style={{
                      width: '100%',
                      aspectRatio: '4 / 3', // Rectangular style
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                    onClick={() => setPreviewImage(m.photoUrl)}
                  />
              </div>
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>{m.name}</h3>
                <p style={{ fontSize: 12, color: '#a5b4fc', marginBottom: 2 }}>
                  Role:&nbsp;
                  <strong>{m.post}</strong>
                </p>
                {m.work && (
                  <p style={{ fontSize: 12, color: '#cbd5f5', marginBottom: 2 }}>
                    Does:&nbsp;
                    <strong>{m.work}</strong>
                  </p>
                )}
                <p style={{ fontSize: 12, color: '#9ca3af' }}>
                  Experience:&nbsp;
                  <strong>{m.experience}</strong>
                </p>
              </div>
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

export default StaffSection;

