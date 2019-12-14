import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  static get is() {
    return 'td-circle';
  }

  static get properties() {
    return {
      text: { type: String }
    }
  }

  constructor() {
    super();
    this.text = '';
  }

  render() {
    const { text } = this;
    return html`
      <div class="circle">
        <div class="circle__inner">
          10
        </div>
      </div>
    `
  }
};
window.customElements.define(ButtonCompornent.is, ButtonCompornent);
export default ButtonCompornent;
