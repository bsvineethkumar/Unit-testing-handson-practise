import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('is defined', async () => {
    const el = await fixture(html`<loan-header></loan-header>`);
    expect(el).dom.exist;
  });

  it('calls localeChanged function', async () => {
    const el = await fixture(html`<loan-header></loan-header>`);
    const myFunctionStub = stub(el, 'localeChanged');
    el.requestUpdate();
    await el.completeUpdate;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(1);
  });
});
