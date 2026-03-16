import type { FormEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/client';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await api.post<{ token: string }>('/auth/login', { email, password });
      localStorage.setItem('vdhb_token', res.data.token);
      navigate('/admin');
    } catch {
      setError('Invalid credentials. Use the default admin email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div style={{ maxWidth: 420, margin: '0 auto' }}>
        <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
          Admin
        </p>
        <h1 style={{ fontSize: 26, marginTop: 10, marginBottom: 10 }}>Virtual Digital Hub Dashboard Login</h1>
        <form
          onSubmit={handleSubmit}
          className="gradient-border"
          style={{ borderRadius: 22, padding: 1 }}
          autoComplete="off"
        >
          {/* Dummy inputs to prevent browser autofill */}
          <input type="email" name="fakeusernameremembered" style={{ display: 'none' }} aria-hidden="true" />
          <input type="password" name="fakepasswordremembered" style={{ display: 'none' }} aria-hidden="true" />
          
          <div
            style={{
              borderRadius: 20,
              background: 'rgba(15,23,42,0.96)',
              padding: 18,
              display: 'grid',
              gap: 12,
              fontSize: 13,
            }}
          >
            <div>
              <label htmlFor="adminEmail">Email</label>
              <input
                id="adminEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                autoComplete="off"
                data-lpignore="true"
                required
                style={{
                  width: '100%',
                  marginTop: 4,
                  borderRadius: 10,
                  border: '1px solid rgba(148,163,184,0.6)',
                  background: 'rgba(15,23,42,0.96)',
                  padding: '8px 10px',
                  color: '#e5f0ff',
                }}
              />
            </div>
            <div>
              <label htmlFor="adminPassword">Password</label>
              <div style={{ position: 'relative', marginTop: 4 }}>
                <input
                  id="adminPassword"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  data-lpignore="true"
                  required
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 40px 8px 10px',
                    color: '#e5f0ff',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 4,
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {error && (
              <p style={{ fontSize: 12, color: '#f97373' }}>
                {error}
              </p>
            )}
            <button type="submit" className="btn btn--primary" disabled={loading}>
              {loading ? 'Logging in…' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginPage;