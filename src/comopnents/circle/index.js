import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  static get is() {
    return 'td-circle';
  }

  static get properties() {
    return {
      text: { type: String },
      todoindex: { type: Number }
    }
  }

  constructor() {
    super();
    this.text = '';
    this.todoindex = '';
  }

  render() {
    const { text } = this;
    return html`
      <div class="circle" @click="${(event) => this.handleClick(event)}">
        <div class="circle__inner">
          ${text}
        </div>
      </div>
    `
  }

  handleClick(e) {
    const clickCircle = new CustomEvent('click-circle', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(clickCircle);
  }
};
window.customElements.define(ButtonCompornent.is, ButtonCompornent);
export default ButtonCompornent;
