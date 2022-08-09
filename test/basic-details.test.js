import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('Basic details', async () => {
    const element = await fixture(html`<basic-details></basic-details>`)
    const inputElement = element.shadowRoot.querySelector('lion-input');
    expect(inputElement.type).to.equal('text')
  })
  it('calls Capture functions', async () => {
    const element = await fixture(html`<basic-details><lion-form><form></form></lion-form></basic-details>`)
    const MyFunction = stub(element, '_captureDetails')
    element.requestUpdate();
    await element.completeUpdate;
    element.shadowRoot.querySelector('button').click();
    expect(MyFunction).to.have.callCount(0)
  })
  it('calls toDashboard functions', async () => {
    const element = await fixture(html`<basic-details><lion-form><form></form></lion-form></basic-details>`)
    const MyFunction = stub(element, '_toDashboard')
    element.requestUpdate();
    await element.completeUpdate;
    element.shadowRoot.querySelector('button').click();
    expect(MyFunction).to.have.callCount(0)
  })
});
