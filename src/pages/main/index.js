import { LitElement, html } from 'lit-element';
import './index.scss';
import '../../comopnents/header';
import '../../comopnents/circle';
import '../../comopnents/button'

// このファイルに作ったコンポーネントを入れていく

class MainPageCompornent extends LitElement {
  static get is() {
    return 'td-page-main';
  }

  static get path() {
    return '/';
  }

  static get properties() {
    return {
      kebosu: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.kebosu = 'otya';
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <td-header></td-header>
        </div>
        <div class="body">
          <div class="circles">
            <td-circle></td-circle>
          </div>
          <div class="button__bg" @click-button="${(event) => this.changeStyle(event).bind}">
            <div class="button">
              <td-button></td-button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  changeStyle(e) {
    e.currentTarget.style = `
      height: 100vh;
      bottom: 0;
    `;
  }
};

window.customElements.define(MainPageCompornent.is, MainPageCompornent);
export default MainPageCompornent;
