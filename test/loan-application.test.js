import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
   it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
   
    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
})
});
