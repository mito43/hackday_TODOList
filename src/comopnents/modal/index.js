import { LitElement, html } from 'lit-element';
import './index.scss';


class MainPageCompornent extends LitElement {
  static get is() {
    return 'td-modal';
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="modal">
        <a class="modal__link" href="https://hackday.jp/">
          <img class="modal__img" src="https://s.yimg.jp/images/hackday/2019/assets/images/main-cover-logo.png">
        </a>
      </div>
    `
  }
};

window.customElements.define(MainPageCompornent.is, MainPageCompornent);
export default MainPageCompornent;
