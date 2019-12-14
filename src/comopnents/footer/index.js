import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  render() {
    return html`
    <div class="Button">
      <div class="Button__label">
        ここに変数
      </div>
    </div>
    `
  }
};
window.customElements.define('c-button', ButtonCompornent);
export default ButtonCompornent;
