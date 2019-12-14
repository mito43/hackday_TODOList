import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  render() {
    return html`
      <div class="circle">
        <div class="circle__inner">
          10
        </div>
      </div>
    `
  }
};
window.customElements.define('td-circle', ButtonCompornent);
export default ButtonCompornent;
