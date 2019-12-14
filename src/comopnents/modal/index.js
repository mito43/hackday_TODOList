import { LitElement, html } from 'lit-element';
import './index.scss';


class MainPageCompornent extends LitElement {
  static get is() {
    return 'td-modal';
  }

  static get properties() {
    return {
      imgSrc: { type: String },
      link: { type: String }
    };
  }

  constructor() {
    super();
  }

  render() {
    const { imgSrc, link } = this;
    return html`
      <div class="modal">
        <a class="modal__link" href="${ link }">
          <img class="modal__img" src="${imgSrc}">
        </a>
      </div>
    `
  }
};

window.customElements.define(MainPageCompornent.is, MainPageCompornent);
export default MainPageCompornent;
