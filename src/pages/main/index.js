import { LitElement, html } from 'lit-element';
import './index.scss';
import '../../comopnents/button/index.js';

// このファイルに作ったコンポーネントを入れていく

class MainPageCompornent extends LitElement {
  render() {
    return html`
    <div class="container">
      メインのページ
    </div>
    <c-button></c-button>
    `
  }
};
window.customElements.define('td-page-main', MainPageCompornent);
export default MainPageCompornent;