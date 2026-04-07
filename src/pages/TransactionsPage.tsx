import StatusPill from '../components/common/StatusPill';
import { transactions } from '../constants/mockData';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function TransactionsPage() {
  return (
    <section className="page-wrap">
      <header className="page-header">
        <div>
          <p className="page-kicker">Payments</p>
          <h2>Transaction Monitoring</h2>
        </div>
      </header>

      <section className="two-col-grid">
        <article className="panel">
          <h3>Channel Distribution</h3>
          <p className="panel-text">Mobile 46% · Web 28% · ATM 15% · Branch 11%</p>
        </article>
        <article className="panel">
          <h3>Settlement SLA</h3>
          <p className="panel-text">99.41% settled under 8 minutes.</p>
        </article>
      </section>

      <article className="panel">
        <h3>Live Transaction Stream</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Reference</th>
                <th>Channel</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Location</th>
                <th>Account</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.id}</td>
                  <td>{entry.channel}</td>
                  <td>{formatCurrency(entry.amount)}</td>
                  <td><StatusPill value={entry.status} /></td>
                  <td>{entry.location}</td>
                  <td>{entry.accountRef}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default TransactionsPage;