import { useState } from 'react';
import StatusPill from '../components/common/StatusPill';
import { loanCases } from '../constants/mockData';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function LoansPage() {
  const [docsStatus, setDocsStatus] = useState('');
  const [caseStatus, setCaseStatus] = useState('');
  const [simStatus, setSimStatus] = useState('');
  const [quoteStatus, setQuoteStatus] = useState('');

  const handleAttachDocs = () => {
    setDocsStatus('Uploading...');
    setTimeout(() => {
      console.log('Documents attached to loan application');
      alert('3 documents attached successfully!');
      setDocsStatus('');
    }, 1500);
  };

  const handleCreateCase = (e: React.FormEvent) => {
    e.preventDefault();
    setCaseStatus('Creating...');
    setTimeout(() => {
      console.log('Loan case created');
      alert('Loan case LC-2026-04891 created and sent for underwriting!');
      setCaseStatus('');
    }, 1500);
  };

  const handleRunSimulation = () => {
    setSimStatus('Simulating...');
    setTimeout(() => {
      console.log('Pricing simulation completed');
      alert('Simulation complete: APR 10.25% | Monthly Payment: $10,627');
      setSimStatus('');
    }, 2000);
  };

  const handlePublishQuote = () => {
    setQuoteStatus('Publishing...');
    setTimeout(() => {
      console.log('Quote published to RM portal');
      alert('Quote published! RM portal updated with pricing.');
      setQuoteStatus('');
    }, 1500);
  };
  return (
    <section className="page-wrap">
      <header className="page-header">
        <div>
          <p className="page-kicker">Credit</p>
          <h2>Loan Portfolio Command</h2>
        </div>
      </header>

      <section className="three-col-grid">
        <article className="panel"><h3>Portfolio Outstanding</h3><p className="panel-text">$2.31B</p></article>
        <article className="panel"><h3>NPL Ratio</h3><p className="panel-text">2.14%</p></article>
        <article className="panel"><h3>Avg Approval Time</h3><p className="panel-text">2.8 days</p></article>
      </section>

      <article className="panel">
        <h3>Pipeline Cases</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Applicant</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Stage</th>
                <th>Debt Ratio</th>
              </tr>
            </thead>
            <tbody>
              {loanCases.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.applicant}</td>
                  <td>{loan.product}</td>
                  <td>{formatCurrency(loan.amount)}</td>
                  <td><StatusPill value={loan.stage} /></td>
                  <td>{loan.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <section className="two-col-grid">
        <article className="panel">
          <h3>New Loan Intake Form</h3>
          <p className="panel-text">Capture applications before they enter automated underwriting.</p>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label id="label-applicant" className="field">
                Applicant / Company
                <input id="applicant" type="text" placeholder="Applicant name" />
              </label>
              <label id="label-loan-product" className="field">
                Product
                <select id="loan-product" defaultValue="Mortgage">
                  <option>Mortgage</option>
                  <option>Vehicle</option>
                  <option>Business</option>
                  <option>Personal</option>
                </select>
              </label>
              <label id="label-requested-amount" className="field">
                Requested Amount (USD)
                <input id="requested-amount" type="number" placeholder="500000" />
              </label>
              <label id="label-tenor" className="field">
                Tenor (Months)
                <input id="tenor" type="number" placeholder="60" />
              </label>
            </div>
            <label id="label-collateral-summary" className="field">
              Collateral Summary
              <textarea id="collateral-summary" rows={3} placeholder="Property, vehicle, guarantees, or business assets" />
            </label>
            <div className="form-actions">
              <button type="button" id="attach-docs" className="form-btn" onClick={handleAttachDocs}>
                {docsStatus || 'Attach Docs'}
              </button>
              <button type="submit" id="create-case" className="form-btn strong" onClick={handleCreateCase}>
                {caseStatus || 'Create Case'}
              </button>
            </div>
          </form>
        </article>

        <article className="panel gradient-panel">
          <h3>Pricing Simulation</h3>
          <p className="panel-text">Quickly model rates for relationship managers.</p>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label id="label-risk-band" className="field">
                Risk Band
                <select id="risk-band" defaultValue="Band B">
                  <option>Band A</option>
                  <option>Band B</option>
                  <option>Band C</option>
                  <option>Band D</option>
                </select>
              </label>
              <label id="label-base-rate" className="field">
                Base Rate %
                <input id="base-rate" type="number" step="0.01" placeholder="8.75" />
              </label>
              <label id="label-spread-rate" className="field">
                Spread %
                <input id="spread-rate" type="number" step="0.01" placeholder="1.25" />
              </label>
              <label id="label-fees-rate" className="field">
                Fees %
                <input id="fees-rate" type="number" step="0.01" placeholder="0.55" />
              </label>
            </div>
            <div className="form-actions">
              <button type="button" id="run-simulation" className="form-btn" onClick={handleRunSimulation}>
                {simStatus || 'Run Simulation'}
              </button>
              <button type="button" id="publish-quote" className="form-btn strong" onClick={handlePublishQuote}>
                {quoteStatus || 'Publish Quote'}
              </button>
            </div>
          </form>
        </article>
      </section>
    </section>
  );
}

export default LoansPage;