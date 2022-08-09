import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
  it('customer details', async () =>{
    const element = await fixture(html`<customer-details></customer-details>`)
    const inputElement = element.shadowRoot.querySelector('lion-input');
    expect(inputElement.type).to.equal('text')
  })
  it('calls toEmidetails function', async () => {
    const element = await fixture(html`<customer-details><lion-form><form></form></lion-form></customer-details>`);
    const myFunction = stub(element, '_toEmidetails');
    element.requestUpdate();
    await element.completeUpdate;
    element.shadowRoot.querySelector('button').click();
    expect(myFunction).to.have.callCount(0)
  })
});
