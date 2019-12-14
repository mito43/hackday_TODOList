import { LitElement, html } from 'lit-element';
import './index.scss';

class TestPageCompornent extends LitElement {
  static get is() {
    return 'td-page-test';
  }

  static get path() {
    return '/test';
  }

  render() {
    return html`
      <div class="container">
        これはテストのページです。
      </div>
    `
  }
};
window.customElements.define(TestPageCompornent.is, TestPageCompornent);
export default TestPageCompornent;