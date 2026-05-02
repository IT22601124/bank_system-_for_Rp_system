import { useState } from 'react';
import StatusPill from '../components/common/StatusPill';
import { customers } from '../constants/mockData';

function CustomersPage() {
  const [draftStatus, setDraftStatus] = useState('');
  const [kycStatus, setKycStatus] = useState('');
  const [previewStatus, setPreviewStatus] = useState('');
  const [campaignStatus, setCampaignStatus] = useState('');

  const handleSaveDraft = () => {
    setDraftStatus('Saving...');
    setTimeout(() => {
      console.log('Customer onboarding draft saved');
      alert('Draft saved successfully!');
      setDraftStatus('');
    }, 1000);
  };

  const handleSubmitKYC = (e: React.FormEvent) => {
    e.preventDefault();
    setKycStatus('Submitting...');
    setTimeout(() => {
      console.log('Customer submitted for KYC screening');
      alert('Customer submitted for KYC screening!');
      setKycStatus('');
    }, 1500);
  };

  const handlePreview = () => {
    setPreviewStatus('Loading...');
    setTimeout(() => {
      console.log('Campaign preview opened');
      alert('Campaign preview: 12,450 dormant retail customers targeted');
      setPreviewStatus('');
    }, 1200);
  };

  const handleStartCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    setCampaignStatus('Starting...');
    setTimeout(() => {
      console.log('Retention campaign started');
      alert('Campaign launched! Engaging 12,450 customers.');
      setCampaignStatus('');
    }, 1500);
  };
  return (
    <section className="page-wrap">
      <header className="page-header">
        <div>
          <p className="page-kicker">CRM</p>
          <h2>Customer Intelligence Center</h2>
        </div>
      </header>

      <article className="panel">
        <h3>High Value and Monitored Accounts</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Segment</th>
                <th>Risk Score</th>
                <th>Status</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.segment}</td>
                  <td>{customer.riskScore}</td>
                  <td><StatusPill value={customer.status} /></td>
                  <td>{customer.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <section className="two-col-grid">
        <article className="panel">
          <h3>Customer Onboarding Form</h3>
          <p className="panel-text">Create and route a new customer profile for KYC screening.</p>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label className="field">
                Full Name
                <input type="text" placeholder="e.g. Nimal Jayasuriya" />
              </label>
              <label className="field">
                Segment
                <select defaultValue="Retail">
                  <option>Retail</option>
                  <option>SME</option>
                  <option>Corporate</option>
                  <option>Private</option>
                </select>
              </label>
              <label className="field">
                National ID / Registration
                <input type="text" placeholder="NIC / Company Registration" />
              </label>
              <label className="field">
                Assigned Branch
                <input type="text" placeholder="Colombo Central" />
              </label>
            </div>
            <label className="field">
              Notes
              <textarea rows={4} placeholder="Add due diligence notes or onboarding instructions" />
            </label>
            <div className="form-actions">
              <button type="button" className="form-btn" onClick={handleSaveDraft}>
                {draftStatus || 'Save Draft'}
              </button>
              <button type="submit" className="form-btn strong" onClick={handleSubmitKYC}>
                {kycStatus || 'Submit for KYC'}
              </button>
            </div>
          </form>
        </article>

        <article className="panel gradient-panel">
          <h3>Retention Campaign Builder</h3>
          <p className="panel-text">Launch targeted engagement for dormant and review accounts.</p>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label className="field">
                Campaign Name
                <input type="text" placeholder="Q2 Dormant Reactivation" />
              </label>
              <label className="field">
                Audience Segment
                <select defaultValue="Dormant Retail">
                  <option>Dormant Retail</option>
                  <option>High-value Private</option>
                  <option>SME Review Queue</option>
                </select>
              </label>
              <label className="field">
                Offer Type
                <select defaultValue="Fee Waiver">
                  <option>Fee Waiver</option>
                  <option>Bonus Interest</option>
                  <option>Credit Upgrade</option>
                </select>
              </label>
              <label className="field">
                Launch Date
                <input type="date" />
              </label>
            </div>
            <div className="form-actions">
              <button type="button" className="form-btn" onClick={handlePreview}>
                {previewStatus || 'Preview'}
              </button>
              <button type="submit" className="form-btn strong" onClick={handleStartCampaign}>
                {campaignStatus || 'Start Campaign'}
              </button>
            </div>
          </form>
        </article>
      </section>
    </section>
  );
}

export default CustomersPage;