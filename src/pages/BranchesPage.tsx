import { branches } from '../constants/mockData';

function BranchesPage() {
  return (
    <section className="page-wrap">
      <header className="page-header">
        <div>
          <p className="page-kicker">Network</p>
          <h2>Branch Operations</h2>
        </div>
      </header>

      <article className="panel">
        <h3>Branch Health and Service KPIs</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Branch</th>
                <th>City</th>
                <th>System Uptime</th>
                <th>Incidents</th>
                <th>Avg Queue Time</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch) => (
                <tr key={branch.id}>
                  <td>{branch.id}</td>
                  <td>{branch.name}</td>
                  <td>{branch.city}</td>
                  <td>{branch.uptime}</td>
                  <td>{branch.incidents}</td>
                  <td>{branch.queueTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <section className="two-col-grid">
        <article className="panel">
          <h3>Branch Support Request Form</h3>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label className="field">
                Branch
                <select defaultValue="Colombo Central">
                  <option>Colombo Central</option>
                  <option>Kandy Trade</option>
                  <option>Galle Coast</option>
                  <option>Jaffna North</option>
                </select>
              </label>
              <label className="field">
                Request Type
                <select defaultValue="IT Infrastructure">
                  <option>IT Infrastructure</option>
                  <option>Cash Logistics</option>
                  <option>Security Upgrade</option>
                  <option>Service Quality</option>
                </select>
              </label>
              <label className="field">
                Priority
                <select defaultValue="Medium">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </label>
              <label className="field">
                Target Resolution
                <input type="date" />
              </label>
            </div>
            <label className="field">
              Issue Summary
              <textarea rows={4} placeholder="Describe the branch need or incident context" />
            </label>
            <div className="form-actions">
              <button type="button" className="form-btn">Save Request</button>
              <button type="submit" className="form-btn strong">Submit to HQ Ops</button>
            </div>
          </form>
        </article>

        <article className="panel gradient-panel">
          <h3>Shift Staffing Planner</h3>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label className="field">
                Branch Cluster
                <select defaultValue="Western Region">
                  <option>Western Region</option>
                  <option>Central Region</option>
                  <option>Southern Region</option>
                  <option>Northern Region</option>
                </select>
              </label>
              <label className="field">
                Date
                <input type="date" />
              </label>
              <label className="field">
                Counter Staff Needed
                <input type="number" placeholder="12" />
              </label>
              <label className="field">
                RM Staff Needed
                <input type="number" placeholder="5" />
              </label>
            </div>
            <div className="form-actions">
              <button type="button" className="form-btn">Run Capacity Check</button>
              <button type="button" className="form-btn strong">Approve Roster</button>
            </div>
          </form>
        </article>
      </section>
    </section>
  );
}

export default BranchesPage;