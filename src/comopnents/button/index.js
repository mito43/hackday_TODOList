import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  render() {
    return html`
    <div class="Button">
        追加する
    </div>
    `
  }
};
window.customElements.define('td-button', ButtonCompornent);
export default ButtonCompornent;
