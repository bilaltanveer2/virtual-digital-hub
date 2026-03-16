import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/client';
import type { ResultItem, Testimonial, PortfolioItem, PricingTier, StaffMember } from '../../types';

type TabKey = 'results' | 'testimonials' | 'portfolio' | 'blog' | 'services' | 'pricing' | 'staff';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>('results');
  const [results, setResults] = useState<ResultItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [pricing, setPricing] = useState<PricingTier[]>([]);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [editingResultId, setEditingResultId] = useState<number | null>(null);
  const [editingPortfolioId, setEditingPortfolioId] = useState<number | null>(null);

  const fetchAll = async () => {
    try {
      const [r, t, p, pr, st] = await Promise.all([
        api.get<ResultItem[]>('/results'),
        api.get<Testimonial[]>('/testimonials'),
        api.get<PortfolioItem[]>('/portfolio'),
        api.get<PricingTier[]>('/pricing'),
        api.get<StaffMember[]>('/staff'),
      ]);
      setResults(r.data);
      setTestimonials(t.data);
      setPortfolio(p.data);
      setPricing(pr.data);
      setStaff(st.data);
    } catch {
      // ignore demo errors
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('vdhb_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchAll();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('vdhb_token');
    navigate('/admin/login');
  };

  const handleCreateOrUpdateResult = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const files = form.getAll('images') as File[];

    let imageUrls: string[] | undefined;
    if (files && files.length > 0 && files[0] instanceof File && (files[0] as File).size > 0) {
      const uploadForm = new FormData();
      files.slice(0, 5).forEach((file) => uploadForm.append('images', file));
      const uploadRes = await api.post<{ urls: string[] }>('/upload', uploadForm, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      imageUrls = uploadRes.data.urls;
    }

    try {
      const payload: Partial<ResultItem> = {
        clientName: String(form.get('clientName') || ''),
        projectType: String(form.get('projectType') || ''),
        beforeMetric: String(form.get('beforeMetric') || ''),
        afterMetric: String(form.get('afterMetric') || ''),
        revenueGrowth: String(form.get('revenueGrowth') || ''),
        roas: String(form.get('roas') || ''),
        conversionIncrease: String(form.get('conversionIncrease') || ''),
      };
      if (imageUrls && imageUrls.length) {
        payload.imageUrls = imageUrls;
      }

      if (editingResultId) {
        const res = await api.put<ResultItem>(`/results/${editingResultId}`, payload);
        setResults((prev) => prev.map((r) => (r.id === editingResultId ? res.data : r)));
        setEditingResultId(null);
      } else {
        const res = await api.post<ResultItem>('/results', payload);
        setResults((prev) => [...prev, res.data]);
      }
      e.currentTarget.reset();
    } catch {
      // handle error
    }
  };

  const handleDelete = async (collection: TabKey, id: string | number) => {
    try {
      await api.delete(`/${collection}/${id}`);
      if (collection === 'results') setResults((prev) => prev.filter((i) => String(i.id) !== String(id)));
      if (collection === 'testimonials') setTestimonials((prev) => prev.filter((i) => String(i.id) !== String(id)));
      if (collection === 'portfolio') setPortfolio((prev) => prev.filter((i) => String(i.id) !== String(id)));
      if (collection === 'pricing') setPricing((prev) => prev.filter((i) => String(i.id) !== String(id)));
      if (collection === 'staff') setStaff((prev) => prev.filter((i) => String(i.id) !== String(id)));
    } catch {
      // handle error
    }
  };

  const handleCreateStaff = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const files = form.getAll('photo') as File[];
    if (!files || !files[0] || !(files[0] instanceof File) || (files[0] as File).size === 0) {
      return;
    }

    try {
      const uploadForm = new FormData();
      uploadForm.append('images', files[0]);
      const uploadRes = await api.post<{ urls: string[] }>('/upload', uploadForm, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const photoUrl = uploadRes.data.urls[0];

      const res = await api.post<StaffMember>('/staff', {
        name: String(form.get('name') || ''),
        post: String(form.get('post') || ''),
        work: String(form.get('work') || ''),
        experience: String(form.get('experience') || ''),
        photoUrl,
      });
      setStaff((prev) => [res.data, ...prev]);
      e.currentTarget.reset();
    } catch {
      // handle error
    }
  };

  const handleCreateTestimonial = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    try {
      const res = await api.post<Testimonial>('/testimonials', {
        clientName: form.get('clientName'),
        company: form.get('company'),
        rating: Number(form.get('rating') || 5),
        quote: form.get('quote'),
      });
      setTestimonials((prev) => [...prev, res.data]);
      e.currentTarget.reset();
    } catch {
      // handle error
    }
  };

  const handleCreateOrUpdatePortfolio = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const files = form.getAll('images') as File[];

    let imageUrls: string[] | undefined;
    if (files && files.length > 0 && files[0] instanceof File && (files[0] as File).size > 0) {
      const uploadForm = new FormData();
      files.slice(0, 5).forEach((file) => uploadForm.append('images', file));
      const uploadRes = await api.post<{ urls: string[] }>('/upload', uploadForm, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      imageUrls = uploadRes.data.urls;
    }

    try {
      const payload: Partial<PortfolioItem> = {
        title: String(form.get('title') || ''),
        clientName: String(form.get('clientName') || ''),
        industry: String(form.get('industry') || ''),
        problem: String(form.get('problem') || ''),
        strategy: String(form.get('strategy') || ''),
        result: String(form.get('result') || ''),
      };
      if (imageUrls && imageUrls.length) {
        payload.imageUrls = imageUrls;
      }

      if (editingPortfolioId) {
        const res = await api.put<PortfolioItem>(`/portfolio/${editingPortfolioId}`, payload);
        setPortfolio((prev) => prev.map((p) => (p.id === editingPortfolioId ? res.data : p)));
        setEditingPortfolioId(null);
      } else {
        const res = await api.post<PortfolioItem>('/portfolio', payload);
        setPortfolio((prev) => [...prev, res.data]);
      }
      e.currentTarget.reset();
    } catch {
      // handle error
    }
  };

  const handleCreatePricing = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const featuresRaw = String(form.get('features') || '');
    const features = featuresRaw.split('\n').map((f) => f.trim()).filter(Boolean);
    try {
      const res = await api.post<PricingTier>('/pricing', {
        tier: form.get('tier'),
        price: form.get('price'),
        features,
      });
      setPricing((prev) => [...prev, res.data]);
      e.currentTarget.reset();
    } catch {
      // handle error
    }
  };

  const tabButton = (key: TabKey, label: string) => (
    <button
      type="button"
      onClick={() => setActiveTab(key)}
      className="btn btn--ghost"
      style={{
        paddingInline: 14,
        paddingBlock: 6,
        fontSize: 12,
        background: activeTab === key ? 'rgba(15,23,42,1)' : undefined,
        borderColor: activeTab === key ? 'rgba(129,140,248,0.9)' : undefined,
      }}
    >
      {label}
    </button>
  );

  return (
    <section className="section">
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
              Admin Dashboard
            </p>
            <h1 style={{ fontSize: 24, marginTop: 6 }}>Virtual Digital Hub CMS</h1>
          </div>
          <button type="button" className="btn btn--ghost" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 16,
          }}
        >
          {tabButton('results', 'Client Results')}
          {tabButton('testimonials', 'Testimonials')}
          {tabButton('portfolio', 'Portfolio')}
          {tabButton('blog', 'Blog Posts (API only)')}
          {tabButton('services', 'Services (API only)')}
          {tabButton('pricing', 'Pricing')}
          {tabButton('staff', 'Staff')}
        </div>

        {activeTab === 'results' && (
          <div className="grid-2">
            <form onSubmit={handleCreateOrUpdateResult} className="gradient-border" style={{ borderRadius: 18, padding: 1 }}>
              <div
                style={{
                  borderRadius: 16,
                  background: 'rgba(15,23,42,0.97)',
                  padding: 14,
                  display: 'grid',
                  gap: 8,
                  fontSize: 12,
                }}
              >
                <h2 style={{ fontSize: 14 }}>{editingResultId ? 'Edit Result' : 'Add Result'}</h2>
                <input name="clientName" placeholder="Client name" required />
                <input name="projectType" placeholder="Project type (e.g. Meta + Google Ads)" required />
                <input name="beforeMetric" placeholder="Before (e.g. $40k/mo)" required />
                <input name="afterMetric" placeholder="After (e.g. $120k/mo)" required />
                <input name="revenueGrowth" placeholder="Revenue growth (e.g. +180%)" required />
                <input name="roas" placeholder="ROAS result (e.g. 3.8x)" required />
                <input name="conversionIncrease" placeholder="Conversion increase (e.g. +1.9 pts)" required />
                <label style={{ fontSize: 11, color: '#9ca3af' }}>
                  Upload 1–5 images
                  <input name="images" type="file" accept="image/*" multiple style={{ display: 'block', marginTop: 4 }} />
                </label>
                <button type="submit" className="btn btn--primary">
                  {editingResultId ? 'Update result' : 'Save result'}
                </button>
              </div>
            </form>
            <div
              style={{
                borderRadius: 18,
                border: '1px solid rgba(148,163,184,0.4)',
                padding: 12,
                fontSize: 12,
              }}
            >
              <h2 style={{ fontSize: 14, marginBottom: 8 }}>Existing Results</h2>
              {results.map((r) => (
                <div
                  key={r.id}
                  style={{
                    borderBottom: '1px solid rgba(51,65,85,0.8)',
                    paddingBlock: 6,
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8,
                  }}
                >
                  <div>
                    <strong>{r.clientName}</strong> – {r.projectType}
                    <div style={{ color: '#9ca3af' }}>
                      {r.beforeMetric} → {r.afterMetric} • {r.revenueGrowth} • {r.roas}
                    </div>
                    {r.imageUrls && r.imageUrls.length > 0 && (
                      <div style={{ marginTop: 4, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {r.imageUrls.slice(0, 5).map((url) => (
                          <img
                            key={url}
                            src={url}
                            alt={r.clientName}
                            style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      style={{ paddingInline: 10, fontSize: 11 }}
                      onClick={() => setEditingResultId(r.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      style={{ paddingInline: 10, fontSize: 11 }}
                      onClick={() => handleDelete('results', r.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {!results.length && <p style={{ color: '#9ca3af' }}>No results yet.</p>}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="grid-2">
            <form
              onSubmit={handleCreateTestimonial}
              className="gradient-border"
              style={{ borderRadius: 18, padding: 1 }}
            >
              <div
                style={{
                  borderRadius: 16,
                  background: 'rgba(15,23,42,0.97)',
                  padding: 14,
                  display: 'grid',
                  gap: 8,
                  fontSize: 12,
                }}
              >
                <h2 style={{ fontSize: 14 }}>Add Testimonial</h2>
                <input name="clientName" placeholder="Client name" required />
                <input name="company" placeholder="Company" required />
                <input name="rating" type="number" min="1" max="5" defaultValue="5" />
                <textarea name="quote" rows={3} placeholder="Review text" required />
                <button type="submit" className="btn btn--primary">
                  Save testimonial
                </button>
              </div>
            </form>
            <div
              style={{
                borderRadius: 18,
                border: '1px solid rgba(148,163,184,0.4)',
                padding: 12,
                fontSize: 12,
              }}
            >
              <h2 style={{ fontSize: 14, marginBottom: 8 }}>Existing Testimonials</h2>
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  style={{
                    borderBottom: '1px solid rgba(51,65,85,0.8)',
                    paddingBlock: 6,
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8,
                  }}
                >
                  <div>
                    <strong>{t.clientName}</strong> – {t.company}
                    <div style={{ color: '#9ca3af' }}>“{t.quote}”</div>
                  </div>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    style={{ paddingInline: 10, fontSize: 11 }}
                    onClick={() => handleDelete('testimonials', t.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              {!testimonials.length && <p style={{ color: '#9ca3af' }}>No testimonials yet.</p>}
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="grid-2">
            <form
              onSubmit={handleCreateOrUpdatePortfolio}
              className="gradient-border"
              style={{ borderRadius: 18, padding: 1 }}
            >
              <div
                style={{
                  borderRadius: 16,
                  background: 'rgba(15,23,42,0.97)',
                  padding: 14,
                  display: 'grid',
                  gap: 8,
                  fontSize: 12,
                }}
              >
                <h2 style={{ fontSize: 14 }}>{editingPortfolioId ? 'Edit Case Study' : 'Add Case Study'}</h2>
                <input name="title" placeholder="Project title" required />
                <input name="clientName" placeholder="Client name" required />
                <input name="industry" placeholder="Industry" />
                <textarea name="problem" rows={2} placeholder="Problem" required />
                <textarea name="strategy" rows={2} placeholder="Strategy" required />
                <textarea name="result" rows={2} placeholder="Result" required />
                <label style={{ fontSize: 11, color: '#9ca3af' }}>
                  Upload 1–5 images
                  <input name="images" type="file" accept="image/*" multiple style={{ display: 'block', marginTop: 4 }} />
                </label>
                <button type="submit" className="btn btn--primary">
                  {editingPortfolioId ? 'Update case study' : 'Save case study'}
                </button>
              </div>
            </form>
            <div
              style={{
                borderRadius: 18,
                border: '1px solid rgba(148,163,184,0.4)',
                padding: 12,
                fontSize: 12,
              }}
            >
              <h2 style={{ fontSize: 14, marginBottom: 8 }}>Existing Case Studies</h2>
              {portfolio.map((p) => (
                <div
                  key={p.id}
                  style={{
                    borderBottom: '1px solid rgba(51,65,85,0.8)',
                    paddingBlock: 6,
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8,
                  }}
                >
                  <div>
                    <strong>{p.title}</strong> – {p.clientName}
                    <div style={{ color: '#9ca3af' }}>{p.result}</div>
                    {p.imageUrls && p.imageUrls.length > 0 && (
                      <div style={{ marginTop: 4, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {p.imageUrls.slice(0, 5).map((url) => (
                          <img
                            key={url}
                            src={url}
                            alt={p.title}
                            style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      style={{ paddingInline: 10, fontSize: 11 }}
                      onClick={() => setEditingPortfolioId(p.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      style={{ paddingInline: 10, fontSize: 11 }}
                      onClick={() => handleDelete('portfolio', p.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {!portfolio.length && <p style={{ color: '#9ca3af' }}>No case studies yet.</p>}
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="grid-2">
            <form
              onSubmit={handleCreatePricing}
              className="gradient-border"
              style={{ borderRadius: 18, padding: 1 }}
            >
              <div
                style={{
                  borderRadius: 16,
                  background: 'rgba(15,23,42,0.97)',
                  padding: 14,
                  display: 'grid',
                  gap: 8,
                  fontSize: 12,
                }}
              >
                <h2 style={{ fontSize: 14 }}>Add Pricing Tier</h2>
                <input name="tier" placeholder="Tier name (e.g. Growth)" required />
                <input name="price" placeholder="Price (e.g. $3,000 / mo)" required />
                <textarea
                  name="features"
                  rows={3}
                  placeholder={'One feature per line\nCampaign management\nCreative testing\nReporting'}
                  required
                />
                <button type="submit" className="btn btn--primary">
                  Save pricing tier
                </button>
              </div>
            </form>
            <div
              style={{
                borderRadius: 18,
                border: '1px solid rgba(148,163,184,0.4)',
                padding: 12,
                fontSize: 12,
              }}
            >
              <h2 style={{ fontSize: 14, marginBottom: 8 }}>Existing Pricing</h2>
              {pricing.map((p) => (
                <div
                  key={p.id}
                  style={{
                    borderBottom: '1px solid rgba(51,65,85,0.8)',
                    paddingBlock: 6,
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8,
                  }}
                >
                  <div>
                    <strong>{p.tier}</strong> – {p.price}
                    <div style={{ color: '#9ca3af' }}>{p.features.join(', ')}</div>
                  </div>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    style={{ paddingInline: 10, fontSize: 11 }}
                    onClick={() => handleDelete('pricing', p.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              {!pricing.length && <p style={{ color: '#9ca3af' }}>No pricing tiers yet.</p>}
            </div>
          </div>
        )}

        {activeTab === 'staff' && (
          <div className="grid-2">
            <form onSubmit={handleCreateStaff} className="gradient-border" style={{ borderRadius: 18, padding: 1 }}>
              <div
                style={{
                  borderRadius: 16,
                  background: 'rgba(15,23,42,0.97)',
                  padding: 14,
                  display: 'grid',
                  gap: 8,
                  fontSize: 12,
                }}
              >
                <h2 style={{ fontSize: 14 }}>Add Staff Member</h2>
                <input name="name" placeholder="Name" required />
                <input name="post" placeholder="Rank / Post (e.g. CEO)" required />
                <input name="work" placeholder="What they do (e.g. Web Developer)" />
                <input name="experience" placeholder="Experience (e.g. 4+)" required />
                <label style={{ fontSize: 11, color: '#9ca3af' }}>
                  Photo (required)
                  <input name="photo" type="file" accept="image/*" style={{ display: 'block', marginTop: 4 }} required />
                </label>
                <button type="submit" className="btn btn--primary">
                  Save staff
                </button>
              </div>
            </form>
            <div
              style={{
                borderRadius: 18,
                border: '1px solid rgba(148,163,184,0.4)',
                padding: 12,
                fontSize: 12,
              }}
            >
              <h2 style={{ fontSize: 14, marginBottom: 8 }}>Existing Staff</h2>
              {staff.map((s) => (
                <div
                  key={String(s.id)}
                  style={{
                    borderBottom: '1px solid rgba(51,65,85,0.8)',
                    paddingBlock: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <img
                      src={s.photoUrl}
                      alt={s.name}
                      style={{ width: 44, height: 44, borderRadius: 12, objectFit: 'cover' }}
                    />
                    <div>
                      <strong>{s.name}</strong> – {s.post}
                      <div style={{ color: '#9ca3af' }}>{s.experience}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    style={{ paddingInline: 10, fontSize: 11 }}
                    onClick={() => handleDelete('staff', String(s.id))}
                  >
                    Delete
                  </button>
                </div>
              ))}
              {!staff.length && <p style={{ color: '#9ca3af' }}>No staff members yet.</p>}
            </div>
          </div>
        )}

        {(activeTab === 'blog' || activeTab === 'services') && (
          <div
            style={{
              borderRadius: 18,
              border: '1px solid rgba(148,163,184,0.4)',
              padding: 14,
              fontSize: 13,
              marginTop: 8,
            }}
          >
            <p style={{ marginBottom: 6 }}>
              Blog posts and service definitions are managed via the API endpoints <code>/blog</code> and{' '}
              <code>/services</code>. This keeps your main navigation and copy easy to adjust without touching code.
            </p>
            <p style={{ color: '#9ca3af' }}>
              For a production deployment, connect these routes to a database (e.g. PostgreSQL, MongoDB) for persistence.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;

