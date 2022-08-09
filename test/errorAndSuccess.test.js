import { html, fixture, expect } from '@open-wc/testing';
 import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('success screen ', () => {
  it('is defined', async () => {
    const el = await fixture(html`<loan-error></loan-error>`);
    expect(el).dom.exist;
  });
  it('calls toHome function', async () => {
    const el = await fixture(
      html`<loan-success><lion-button></lion-button></loan-error>`
    );
    const myFunction = stub(el, '_toHome');
    el.requestUpdate();
    await el.completeUpdate;
    el.shadowRoot.querySelector('button').click();
    expect(myFunction).to.have.callCount(0);
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  it('Error screen', async () => {
    const element = await fixture(html`<loan-error></loan-error>`);
    expect(element).dom.exist;
  });
  it('calls toHome function', async () => {
    const el = await fixture(
      html`<loan-error><lion-button></lion-button></loan-error>`
    );
    const myFunction = stub(el, '_toHome');
    el.requestUpdate();
    await el.completeUpdate;
    el.shadowRoot.querySelector('button').click();
    expect(myFunction).to.have.callCount(0);
  });
});
