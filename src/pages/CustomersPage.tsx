import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import StatusPill from '../components/common/StatusPill';
import { customers } from '../constants/mockData';
import type { Customer } from '../types/bank';

const ONBOARDING_STORAGE_KEY = 'bank-customer-onboarding-records';

type CustomerSegment = Customer['segment'];
type OnboardingStage = 'Draft' | 'KYC Pending';
type Gender = 'Male' | 'Female' | 'Other';

interface OnboardingRecord {
  recordId: string;
  fullName: string;
  segment: CustomerSegment;
  gender: Gender;
  nationalId: string;
  branch: string;
  notes: string;
  termsAccepted: boolean;
  stage: OnboardingStage;
  submittedAt: string;
}

interface OnboardingFormState {
  fullName: string;
  segment: CustomerSegment;
  gender: Gender;
  nationalId: string;
  branch: string;
  notes: string;
  termsAccepted: boolean;
}

const INITIAL_FORM_STATE: OnboardingFormState = {
  fullName: '',
  segment: 'Retail',
  gender: 'Male',
  nationalId: '',
  branch: '',
  notes: '',
  termsAccepted: false,
};

function loadOnboardingRecords() {
  const rawValue = window.localStorage.getItem(ONBOARDING_STORAGE_KEY);
  if (!rawValue) {
    return [] as OnboardingRecord[];
  }

  try {
    const parsed = JSON.parse(rawValue);
    if (!Array.isArray(parsed)) {
      return [] as OnboardingRecord[];
    }

    return parsed
      .filter((record) => {
        return (
          typeof record?.recordId === 'string'
          && typeof record?.fullName === 'string'
          && typeof record?.segment === 'string'
          && typeof record?.nationalId === 'string'
          && typeof record?.branch === 'string'
          && typeof record?.notes === 'string'
          && typeof record?.stage === 'string'
          && typeof record?.submittedAt === 'string'
        );
      })
      .map((record) => {
        const safeGender: Gender = record.gender === 'Female' || record.gender === 'Other' ? record.gender : 'Male';
        return {
          ...record,
          gender: safeGender,
          termsAccepted: Boolean(record.termsAccepted),
        };
      });
  } catch {
    return [] as OnboardingRecord[];
  }
}

function CustomersPage() {
  const [onboardingForm, setOnboardingForm] = useState<OnboardingFormState>(INITIAL_FORM_STATE);
  const [onboardingRecords, setOnboardingRecords] = useState<OnboardingRecord[]>(() => loadOnboardingRecords());
  const [draftStatus, setDraftStatus] = useState('');
  const [kycStatus, setKycStatus] = useState('');
  const [previewStatus, setPreviewStatus] = useState('');
  const [campaignStatus, setCampaignStatus] = useState('');

  useEffect(() => {
    window.localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(onboardingRecords));
  }, [onboardingRecords]);

  const updateOnboardingField = (field: keyof OnboardingFormState, value: string) => {
    setOnboardingForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const updateOnboardingCheckbox = (field: 'termsAccepted', value: boolean) => {
    setOnboardingForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const createOnboardingRecord = (stage: OnboardingStage): OnboardingRecord => {
    return {
      recordId: `ONB-${Date.now()}`,
      fullName: onboardingForm.fullName.trim(),
      segment: onboardingForm.segment,
      gender: onboardingForm.gender,
      nationalId: onboardingForm.nationalId.trim(),
      branch: onboardingForm.branch.trim(),
      notes: onboardingForm.notes.trim(),
      termsAccepted: onboardingForm.termsAccepted,
      stage,
      submittedAt: new Date().toISOString(),
    };
  };

  const clearOnboardingForm = () => {
    setOnboardingForm(INITIAL_FORM_STATE);
  };

  const hasRequiredOnboardingFields = () => {
    return onboardingForm.fullName.trim() && onboardingForm.nationalId.trim() && onboardingForm.branch.trim();
  };

  const handleSaveDraft = () => {
    if (!hasRequiredOnboardingFields()) {
      alert('Please fill Full Name, National ID / Registration, and Assigned Branch before saving.');
      return;
    }

    setDraftStatus('Saving...');
    setTimeout(() => {
      const draftRecord = createOnboardingRecord('Draft');
      setOnboardingRecords((previous) => [draftRecord, ...previous]);
      console.log('Customer onboarding draft saved');
      alert('Draft saved successfully!');
      clearOnboardingForm();
      setDraftStatus('');
    }, 1000);
  };

  const handleSubmitKYC = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasRequiredOnboardingFields()) {
      alert('Please fill Full Name, National ID / Registration, and Assigned Branch before submitting.');
      return;
    }

    setKycStatus('Submitting...');
    setTimeout(() => {
      const kycRecord = createOnboardingRecord('KYC Pending');
      setOnboardingRecords((previous) => [kycRecord, ...previous]);
      console.log('Customer submitted for KYC screening');
      alert('Customer submitted for KYC screening!');
      clearOnboardingForm();
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

  const handleStartCampaign = (e: FormEvent<HTMLFormElement>) => {
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
          <form className="admin-form" onSubmit={handleSubmitKYC}>
            <div className="form-grid">
              <label id="label-customer-fullname" className="field">
                Full Name
                <input
                  id="customer-fullname"
                  type="text"
                  placeholder="e.g. Nimal Jayasuriya"
                  value={onboardingForm.fullName}
                  onChange={(event) => updateOnboardingField('fullName', event.target.value)}
                />
              </label>
              <label id="label-customer-segment" className="field">
                Segment
                <select
                  id="customer-segment"
                  value={onboardingForm.segment}
                  onChange={(event) => updateOnboardingField('segment', event.target.value)}
                >
                  <option>Retail</option>
                  <option>SME</option>
                  <option>Corporate</option>
                  <option>Private</option>
                </select>
              </label>
              <label id="label-customer-id" className="field">
                National ID / Registration
                <input
                  id="customer-id"
                  type="text"
                  placeholder="NIC / Company Registration"
                  value={onboardingForm.nationalId}
                  onChange={(event) => updateOnboardingField('nationalId', event.target.value)}
                />
              </label>
              <fieldset id="label-customer-gender" className="field">
                <legend>Gender</legend>
                <label>
                  <input
                    type="radio"
                    name="customer-gender"
                    value="Male"
                    checked={onboardingForm.gender === 'Male'}
                    onChange={(event) => updateOnboardingField('gender', event.target.value)}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="customer-gender"
                    value="Female"
                    checked={onboardingForm.gender === 'Female'}
                    onChange={(event) => updateOnboardingField('gender', event.target.value)}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="customer-gender"
                    value="Other"
                    checked={onboardingForm.gender === 'Other'}
                    onChange={(event) => updateOnboardingField('gender', event.target.value)}
                  />
                  Other
                </label>
              </fieldset>
              <label id="label-assigned-branch" className="field">
                Assigned Branch
                <input
                  id="assigned-branch"
                  type="text"
                  placeholder="Colombo Central"
                  value={onboardingForm.branch}
                  onChange={(event) => updateOnboardingField('branch', event.target.value)}
                />
              </label>
            </div>
            <label id="label-customer-terms" className="field">
              <input
                id="customer-terms"
                type="checkbox"
                checked={onboardingForm.termsAccepted}
                onChange={(event) => updateOnboardingCheckbox('termsAccepted', event.target.checked)}
              />
              I confirm this onboarding profile has customer consent for processing.
            </label>
            <label id="label-customer-notes" className="field">
              Notes
              <textarea
                id="customer-notes"
                rows={4}
                placeholder="Add due diligence notes or onboarding instructions"
                value={onboardingForm.notes}
                onChange={(event) => updateOnboardingField('notes', event.target.value)}
              />
            </label>
            <div className="form-actions">
              <button type="button" id="save-draft" className="form-btn" onClick={handleSaveDraft}>
                {draftStatus || 'Save Draft'}
              </button>
              <button type="submit" id="submit-kyc" className="form-btn strong">
                {kycStatus || 'Submit for KYC'}
              </button>
            </div>
          </form>
        </article>

        <article className="panel gradient-panel">
          <h3>Retention Campaign Builder</h3>
          <p className="panel-text">Launch targeted engagement for dormant and review accounts.</p>
          <form className="admin-form" onSubmit={handleStartCampaign}>
            <div className="form-grid">
              <label id="label-campaign-name" className="field">
                Campaign Name
                <input id="campaign-name" type="text" placeholder="Q2 Dormant Reactivation" />
              </label>
              <label id="label-audience-segment" className="field">
                Audience Segment
                <select id="audience-segment" defaultValue="Dormant Retail">
                  <option>Dormant Retail</option>
                  <option>High-value Private</option>
                  <option>SME Review Queue</option>
                </select>
              </label>
              <label id="label-offer-type" className="field">
                Offer Type
                <select id="offer-type" defaultValue="Fee Waiver">
                  <option>Fee Waiver</option>
                  <option>Bonus Interest</option>
                  <option>Credit Upgrade</option>
                </select>
              </label>
              <label id="label-campaign-launch-date" className="field">
                Launch Date
                <input id="campaign-launch-date" type="date" />
              </label>
            </div>
            <div className="form-actions">
              <button type="button" id="campaign-preview" className="form-btn" onClick={handlePreview}>
                {previewStatus || 'Preview'}
              </button>
              <button type="submit" id="start-campaign" className="form-btn strong">
                {campaignStatus || 'Start Campaign'}
              </button>
            </div>
          </form>
        </article>
      </section>

      <article className="panel">
        <h3>Onboarding Submissions</h3>
        <p className="panel-text">
          Recently added customer details from the onboarding form ({onboardingRecords.length}).
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Ref</th>
                <th>Full Name</th>
                <th>Segment</th>
                <th>Gender</th>
                <th>National ID / Registration</th>
                <th>Branch</th>
                <th>Notes</th>
                <th>Consent</th>
                <th>Stage</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {onboardingRecords.length === 0 ? (
                <tr>
                  <td colSpan={10}>No onboarding records yet. Submit the form to display customer details here.</td>
                </tr>
              ) : (
                onboardingRecords.map((record) => (
                  <tr key={record.recordId}>
                    <td>{record.recordId}</td>
                    <td>{record.fullName}</td>
                    <td>{record.segment}</td>
                    <td>{record.gender}</td>
                    <td>{record.nationalId}</td>
                    <td>{record.branch}</td>
                    <td>{record.notes || 'No notes'}</td>
                    <td>{record.termsAccepted ? 'Accepted' : 'Not accepted'}</td>
                    <td>{record.stage}</td>
                    <td>{new Date(record.submittedAt).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default CustomersPage;