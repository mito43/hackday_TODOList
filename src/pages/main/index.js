import { LitElement, html } from 'lit-element';
import './index.scss';
import '../../comopnents/button/index.js';

// このファイルに作ったコンポーネントを入れていく

class MainPageCompornent extends LitElement {

  static get is() {
    return 'td-page-main';
  }

  static get path() {
    return '/';
  }

  render() {
    return html`
    <div class="container">
      メインのページ
    </div>
    <c-button></c-button>
    `
  }
};

window.customElements.define(MainPageCompornent.is, MainPageCompornent);
export default MainPageCompornent;
