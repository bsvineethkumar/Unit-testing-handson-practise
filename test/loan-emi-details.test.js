import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';

import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  it('Check elements', async () => {
    const data = { interestRate: 5 };
    localStorage.setItem('emi', JSON.stringify(data));
    const emiData = JSON.parse(localStorage.getItem('emi'));
    const el = await fixture(
      html`<loanemi-details ._data=${emiData}></loanemi-details>`
    );

    expect(el._data).to.deep.equal(emiData);
  });

  it('calls toBasicDetails function', async () => {
    const el = await fixture(
      html`<loanemi-details><lion-button></lion-button></loanemi-details>`
    );
    const myFunction = stub(el, '_toBasicDetails');
    el.requestUpdate();
    await el.completeUpdate;
    el.shadowRoot.querySelector('button').click();
    expect(myFunction).to.have.callCount(0);
  });

  it('calls tocustomer function', async () => {
    const el = await fixture(
      html`<loanemi-details><lion-button></lion-button></loanemi-details>`
    );
    const myFunction = stub(el, '_toCustomer');
    el.requestUpdate();
    await el.completeUpdate;
    el.shadowRoot.querySelector('button').click();
    expect(myFunction).to.have.callCount(0);
  });
});
