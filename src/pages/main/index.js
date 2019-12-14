import { LitElement, html } from 'lit-element';
import './index.scss';
import '../../comopnents/header';
import '../../comopnents/button'

// このファイルに作ったコンポーネントを入れていく

class MainPageCompornent extends LitElement {
  render() {
    return html`
<<<<<<< HEAD
      <div class="container">
        <div class="header">
          <td-header></td-header>
        </div>
        <div class="button">
          <td-button></td-button>
        </div>
      </div>
=======
    <div class="container">
      メインのページ
    </div>
    <c-button></c-button>
>>>>>>> master
    `
  }
};
window.customElements.define('td-page-main', MainPageCompornent);
export default MainPageCompornent;