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
              <label id="label-full-name" className="field">
                Full Name
                <input id="full-name" type="text" placeholder="Admin name" />
              </label>
              <label id="label-role" className="field">
                Role
                <select id="role" defaultValue="Operations Manager">
                  <option>Operations Manager</option>
                  <option>Risk Analyst</option>
                  <option>Credit Supervisor</option>
                  <option>System Administrator</option>
                </select>
              </label>
              <label id="label-work-email" className="field">
                Work Email
                <input id="work-email" type="email" placeholder="admin@bank.com" />
              </label>
              <label id="label-contact-number" className="field">
                Contact Number
                <input id="contact-number" type="tel" placeholder="+94 77 000 0000" />
              </label>
            </div>
            <div className="form-actions">
              <button type="button" id="discard-profile" className="form-btn" onClick={handleDiscard}>
                {discardStatus || 'Discard'}
              </button>
              <button type="submit" id="update-profile" className="form-btn strong" onClick={handleUpdateProfile}>
                {updateStatus || 'Update Profile'}
              </button>
            </div>
          </form>
        </article>

        <article className="panel gradient-panel">
          <h3>System Policy Form</h3>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label id="label-session-timeout" className="field">
                Session Timeout (Minutes)
                <input id="session-timeout" type="number" placeholder="8" />
              </label>
              <label id="label-password-rotation" className="field">
                Password Rotation (Days)
                <input id="password-rotation" type="number" placeholder="30" />
              </label>
              <label id="label-audit-log-retention" className="field">
                Audit Log Retention (Months)
                <input id="audit-log-retention" type="number" placeholder="24" />
              </label>
              <label id="label-incident-notification" className="field">
                Incident Notification Channel
                <select id="incident-notification" defaultValue="Email + SMS">
                  <option>Email</option>
                  <option>Email + SMS</option>
                  <option>Pager + Email</option>
                </select>
              </label>
            </div>
            <div className="form-actions">
              <button type="button" id="preview-policy" className="form-btn" onClick={handlePreviewPolicy}>
                {previewStatus || 'Preview Policy'}
              </button>
              <button type="submit" id="apply-policy" className="form-btn strong" onClick={handleApplyPolicy}>
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
            <label id="label-integration-name" className="field">
              Integration Name
              <input id="integration-name" type="text" placeholder="Credit Bureau Gateway" />
            </label>
            <label id="label-endpoint-url" className="field">
              Endpoint URL
              <input id="endpoint-url" type="url" placeholder="https://api.partnerbank.com/v1" />
            </label>
            <label id="label-health-check-interval" className="field">
              Health Check Interval
              <select id="health-check-interval" defaultValue="5 min">
                <option>1 min</option>
                <option>5 min</option>
                <option>10 min</option>
                <option>30 min</option>
              </select>
            </label>
          </div>
          <div className="form-actions">
            <button type="button" id="test-connection" className="form-btn" onClick={handleTestConnection}>
              {testStatus || 'Test Connection'}
            </button>
            <button type="submit" id="save-integration" className="form-btn strong" onClick={handleSaveIntegration}>
              {saveIntegrationStatus || 'Save Integration'}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default SettingsPage;