import { LitElement, html } from 'lit-element';
import './index.scss';

class TestPageCompornent extends LitElement {
  render() {
    return html`
      <div class="container">
        これはテストのページです。
      </div>
    `
  }
};
window.customElements.define('td-page-test', TestPageCompornent);
export default TestPageCompornent;