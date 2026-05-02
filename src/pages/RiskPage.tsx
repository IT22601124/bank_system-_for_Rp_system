import { useState } from 'react';

function RiskPage() {
  const [escalateStatus, setEscalateStatus] = useState('');
  const [caseStatus, setCaseStatus] = useState('');
  const [planStatus, setPlanStatus] = useState('');
  const [scheduleStatus, setScheduleStatus] = useState('');

  const handleEscalate = () => {
    setEscalateStatus('Escalating...');
    setTimeout(() => {
      console.log('Compliance case escalated to Chief Risk Officer');
      alert('Case escalated to Chief Risk Officer!');
      setEscalateStatus('');
    }, 1000);
  };

  const handleOpenCase = (e: React.FormEvent) => {
    e.preventDefault();
    setCaseStatus('Opening...');
    setTimeout(() => {
      console.log('Compliance case opened');
      alert('Case CC-2026-0847 opened in Financial Crime system!');
      setCaseStatus('');
    }, 1500);
  };

  const handleSavePlan = () => {
    setPlanStatus('Saving...');
    setTimeout(() => {
      console.log('Audit plan saved');
      alert('Audit plan saved as draft!');
      setPlanStatus('');
    }, 1000);
  };

  const handlePublishSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduleStatus('Publishing...');
    setTimeout(() => {
      console.log('Audit schedule published');
      alert('Schedule published! Business units notified.');
      setScheduleStatus('');
    }, 1500);
  };

  return (
    <section className="page-wrap">
      <header className="page-header">
        <div>
          <p className="page-kicker">Control Tower</p>
          <h2>Risk and Compliance</h2>
        </div>
      </header>

      <section className="three-col-grid">
        <article className="panel">
          <h3>Liquidity Coverage Ratio</h3>
          <p className="panel-text">136%</p>
        </article>
        <article className="panel">
          <h3>Capital Adequacy</h3>
          <p className="panel-text">14.8%</p>
        </article>
        <article className="panel">
          <h3>AML Alerts Open</h3>
          <p className="panel-text">27</p>
        </article>
      </section>

      <section className="two-col-grid">
        <article className="panel">
          <h3>Regulatory Checklist</h3>
          <ul className="check-list">
            <li>Basel reporting package generated and signed off.</li>
            <li>KYC refresh for high-risk profiles at 93% completion.</li>
            <li>Sanctions screening latency under 400ms globally.</li>
            <li>Quarterly penetration test remediation 100% closed.</li>
          </ul>
        </article>

        <article className="panel gradient-panel">
          <h3>Model Risk Notes</h3>
          <p className="panel-text">
            Credit default model v4.3 drift score remains below threshold. Recommended recalibration date: 2026-06-18.
          </p>
        </article>
      </section>

      <section className="two-col-grid">
        <article className="panel">
          <h3>Compliance Case Form</h3>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label id="label-case-type" className="field">
                Case Type
                <select id="case-type" defaultValue="AML Alert">
                  <option>AML Alert</option>
                  <option>KYC Breach</option>
                  <option>Sanctions Hit</option>
                  <option>Operational Risk</option>
                </select>
              </label>
              <label id="label-severity" className="field">
                Severity
                <select id="severity" defaultValue="Medium">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </label>
              <label id="label-owner-team" className="field">
                Owner Team
                <input id="owner-team" type="text" placeholder="Financial Crime Ops" />
              </label>
              <label id="label-case-due-date" className="field">
                Due Date
                <input id="case-due-date" type="date" />
              </label>
            </div>
            <label id="label-case-description" className="field">
              Description
              <textarea id="case-description" rows={4} placeholder="Describe suspicious behavior, policy gap, or model issue" />
            </label>
            <div className="form-actions">
              <button type="button" id="escalate-case" className="form-btn" onClick={handleEscalate}>
                {escalateStatus || 'Escalate'}
              </button>
              <button type="submit" id="open-case" className="form-btn strong" onClick={handleOpenCase}>
                {caseStatus || 'Open Case'}
              </button>
            </div>
          </form>
        </article>

        <article className="panel">
          <h3>Internal Audit Scheduler</h3>
          <form className="admin-form" action="#" method="post">
            <div className="form-grid">
              <label id="label-business-unit" className="field">
                Business Unit
                <select id="business-unit" defaultValue="Corporate Lending">
                  <option>Corporate Lending</option>
                  <option>Retail Banking</option>
                  <option>Treasury</option>
                  <option>Operations</option>
                </select>
              </label>
              <label id="label-scope-level" className="field">
                Scope Level
                <select id="scope-level" defaultValue="Full Scope">
                  <option>Full Scope</option>
                  <option>Thematic</option>
                  <option>Targeted</option>
                </select>
              </label>
              <label id="label-audit-start-date" className="field">
                Start Date
                <input id="audit-start-date" type="date" />
              </label>
              <label id="label-lead-auditor" className="field">
                Lead Auditor
                <input id="lead-auditor" type="text" placeholder="Auditor name" />
              </label>
            </div>
            <div className="form-actions">
              <button type="button" id="save-plan" className="form-btn" onClick={handleSavePlan}>
                {planStatus || 'Save Plan'}
              </button>
              <button type="submit" id="publish-schedule" className="form-btn strong" onClick={handlePublishSchedule}>
                {scheduleStatus || 'Publish Schedule'}
              </button>
            </div>
          </form>
        </article>
      </section>
    </section>
  );
}

export default RiskPage;