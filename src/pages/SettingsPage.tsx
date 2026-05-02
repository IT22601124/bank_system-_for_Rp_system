import { useState } from 'react';

function SettingsPage() {
  const [discardStatus, setDiscardStatus] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');
  const [previewStatus, setPreviewStatus] = useState('');
  const [applyStatus, setApplyStatus] = useState('');
  const [testStatus, setTestStatus] = useState('');
  const [saveIntegrationStatus, setSaveIntegrationStatus] = useState('');

  const handleDiscard = () => {
    setDiscardStatus('Discarding...');
    setTimeout(() => {
      console.log('Profile changes discarded');
      alert('Changes discarded!');
      setDiscardStatus('');
    }, 500);
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateStatus('Updating...');
    setTimeout(() => {
      console.log('Admin profile updated');
      alert('Admin profile updated successfully!');
      setUpdateStatus('');
    }, 1500);
  };

  const handlePreviewPolicy = () => {
    setPreviewStatus('Loading...');
    setTimeout(() => {
      console.log('System policy preview loaded');
      alert('Policy Preview: 8 min session timeout, 30 day password rotation');
      setPreviewStatus('');
    }, 1000);
  };

  const handleApplyPolicy = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyStatus('Applying...');
    setTimeout(() => {
      console.log('System policy applied');
      alert('Policy applied to all administrators!');
      setApplyStatus('');
    }, 1500);
  };

  const handleTestConnection = () => {
    setTestStatus('Testing...');
    setTimeout(() => {
      console.log('Integration connection test completed');
      alert('✓ Connection successful (247ms response time)');
      setTestStatus('');
    }, 2000);
  };

  const handleSaveIntegration = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveIntegrationStatus('Saving...');
    setTimeout(() => {
      console.log('Integration saved');
      alert('Integration saved and health checks activated!');
      setSaveIntegrationStatus('');
    }, 1500);
  };

  return (
    <section className="page-wrap">
      <header className="page-header">
        <div>
          <p className="page-kicker">Administration</p>
          <h2>Platform Settings</h2>
        </div>
      </header>

      <section className="two-col-grid">
        <article className="panel">
          <h3>Authentication and Access</h3>
          <ul className="check-list">
            <li>Enforce hardware token for privileged administrators.</li>
            <li>Auto-lock console after 8 minutes of inactivity.</li>
            <li>Rotate service credentials every 30 days.</li>
          </ul>
        </article>

        <article className="panel">
          <h3>Notifications</h3>
          <ul className="check-list">
            <li>Fraud alert escalation to on-call in under 2 minutes.</li>
            <li>Send weekly branch performance packet every Monday.</li>
            <li>Trigger compliance digest for unresolved cases daily.</li>
          </ul>
        </article>
      </section>

      <section className="two-col-grid">
        <article className="panel">
          <h3>Admin Profile Form</h3>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label className="field">
                Full Name
                <input type="text" placeholder="Admin name" />
              </label>
              <label className="field">
                Role
                <select defaultValue="Operations Manager">
                  <option>Operations Manager</option>
                  <option>Risk Analyst</option>
                  <option>Credit Supervisor</option>
                  <option>System Administrator</option>
                </select>
              </label>
              <label className="field">
                Work Email
                <input type="email" placeholder="admin@bank.com" />
              </label>
              <label className="field">
                Contact Number
                <input type="tel" placeholder="+94 77 000 0000" />
              </label>
            </div>
            <div className="form-actions">
              <button type="button" className="form-btn" onClick={handleDiscard}>
                {discardStatus || 'Discard'}
              </button>
              <button type="submit" className="form-btn strong" onClick={handleUpdateProfile}>
                {updateStatus || 'Update Profile'}
              </button>
            </div>
          </form>
        </article>

        <article className="panel gradient-panel">
          <h3>System Policy Form</h3>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label className="field">
                Session Timeout (Minutes)
                <input type="number" placeholder="8" />
              </label>
              <label className="field">
                Password Rotation (Days)
                <input type="number" placeholder="30" />
              </label>
              <label className="field">
                Audit Log Retention (Months)
                <input type="number" placeholder="24" />
              </label>
              <label className="field">
                Incident Notification Channel
                <select defaultValue="Email + SMS">
                  <option>Email</option>
                  <option>Email + SMS</option>
                  <option>Pager + Email</option>
                </select>
              </label>
            </div>
            <div className="form-actions">
              <button type="button" className="form-btn" onClick={handlePreviewPolicy}>
                {previewStatus || 'Preview Policy'}
              </button>
              <button type="submit" className="form-btn strong" onClick={handleApplyPolicy}>
                {applyStatus || 'Apply Policy'}
              </button>
            </div>
          </form>
        </article>
      </section>

      <article className="panel">
        <h3>Integration Connectivity</h3>
        <p className="panel-text">Manage outbound integrations for credit bureau, core banking, and fraud engines.</p>
        <form className="admin-form" action="#" method="post">
          <div className="form-grid three-up">
            <label className="field">
              Integration Name
              <input type="text" placeholder="Credit Bureau Gateway" />
            </label>
            <label className="field">
              Endpoint URL
              <input type="url" placeholder="https://api.partnerbank.com/v1" />
            </label>
            <label className="field">
              Health Check Interval
              <select defaultValue="5 min">
                <option>1 min</option>
                <option>5 min</option>
                <option>10 min</option>
                <option>30 min</option>
              </select>
            </label>
          </div>
          <div className="form-actions">
            <button type="button" className="form-btn" onClick={handleTestConnection}>
              {testStatus || 'Test Connection'}
            </button>
            <button type="submit" className="form-btn strong" onClick={handleSaveIntegration}>
              {saveIntegrationStatus || 'Save Integration'}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default SettingsPage;