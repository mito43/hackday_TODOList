import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  constructor() {
    super();
    this.targetClassName = 'button';
  }

  render() {
    return html`
    <div class="Button" @click="${(event) => this.clickButton(event)}">
        追加する
    </div>
    `
  }

  clickButton(e) {
    let clickButton = new CustomEvent('click-button', { 
      bubbles: true, 
      composed: true
    });
    this.dispatchEvent(clickButton);
  }
};
window.customElements.define('td-button', ButtonCompornent);
export default ButtonCompornent;
