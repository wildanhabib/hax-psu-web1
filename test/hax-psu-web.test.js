import { html, fixture, expect } from '@open-wc/testing';
import "../hax-psu-web.js";

describe("HaxPsuWeb test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <hax-psu-web
        title="title"
      ></hax-psu-web>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
