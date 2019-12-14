import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  render() {
    return html`
    <div class="header">
      <div class="search">
        <div class="search__textinput">
          <input type="text" placeholder="$1">
        </div>
        <img class="search__button" src="https://yahoo.jp/box/Ujmq6N">
      </div>
    </div>
    `
  }
};
window.customElements.define('td-header', ButtonCompornent);
export default ButtonCompornent;
