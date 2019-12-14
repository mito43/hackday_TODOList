import { LitElement, html } from 'lit-element';
import './index.scss';

class TodoPageCompornent extends LitElement {
  static get is() {
    return 'td-page-todo';
  }

  static get path() {
    return '/todo';
  }

  static get properties () {
    return {
      title: { type: String }
    }
  }

  render() {
    const { title } = this;
    return html`
      <div class="container">
        ${title}の情報
      </div>
    `
  }
};
window.customElements.define(TestPageCompornent.is, TestPageCompornent);
export default TestPageCompornent;
