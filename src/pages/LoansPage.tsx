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
              <label className="field">
                Applicant / Company
                <input type="text" placeholder="Applicant name" />
              </label>
              <label className="field">
                Product
                <select defaultValue="Mortgage">
                  <option>Mortgage</option>
                  <option>Vehicle</option>
                  <option>Business</option>
                  <option>Personal</option>
                </select>
              </label>
              <label className="field">
                Requested Amount (USD)
                <input type="number" placeholder="500000" />
              </label>
              <label className="field">
                Tenor (Months)
                <input type="number" placeholder="60" />
              </label>
            </div>
            <label className="field">
              Collateral Summary
              <textarea rows={3} placeholder="Property, vehicle, guarantees, or business assets" />
            </label>
            <div className="form-actions">
              <button type="button" className="form-btn">Attach Docs</button>
              <button type="submit" className="form-btn strong">Create Case</button>
            </div>
          </form>
        </article>

        <article className="panel gradient-panel">
          <h3>Pricing Simulation</h3>
          <p className="panel-text">Quickly model rates for relationship managers.</p>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label className="field">
                Risk Band
                <select defaultValue="Band B">
                  <option>Band A</option>
                  <option>Band B</option>
                  <option>Band C</option>
                  <option>Band D</option>
                </select>
              </label>
              <label className="field">
                Base Rate %
                <input type="number" step="0.01" placeholder="8.75" />
              </label>
              <label className="field">
                Spread %
                <input type="number" step="0.01" placeholder="1.25" />
              </label>
              <label className="field">
                Fees %
                <input type="number" step="0.01" placeholder="0.55" />
              </label>
            </div>
            <div className="form-actions">
              <button type="button" className="form-btn">Run Simulation</button>
              <button type="button" className="form-btn strong">Publish Quote</button>
            </div>
          </form>
        </article>
      </section>
    </section>
  );
}

export default LoansPage;