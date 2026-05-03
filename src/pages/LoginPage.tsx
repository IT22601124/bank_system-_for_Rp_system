import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AUTH_KEY = 'bank-admin-authenticated';
const DEMO_USERNAME = 'admin';
const DEMO_PASSWORD = 'admin123';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (window.localStorage.getItem(AUTH_KEY) === 'true') {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim() === DEMO_USERNAME && password === DEMO_PASSWORD) {
      window.localStorage.setItem(AUTH_KEY, 'true');
      const nextPath = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/';
      navigate(nextPath, { replace: true });
      return;
    }

    setError('Use admin / admin123 to sign in.');
  };

  return (
    <main className="login-shell">
      <section className="login-panel">
        <div className="login-copy">
          <p className="page-kicker">Atlas National</p>
          <h1>Secure access to the bank admin workspace</h1>
          <p className="login-description">
            Sign in once to access the dashboard, customers, transactions, loans, risk, branches, and settings.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              placeholder="admin"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              placeholder="admin123"
              required
            />
          </label>

          {error ? <p className="login-error">{error}</p> : null}

          <button type="submit" className="login-button">
            Sign in
          </button>

          <p className="login-hint">Demo access: admin / admin123</p>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;