import { LitElement, html } from 'lit-element';
import './index.scss';
import '../../comopnents/header';
import '../../comopnents/circle';
import '../../comopnents/button';

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
      <div class="container" is-show>
        <div class="header">
          <td-header></td-header>
        </div>
        <div class="body">
          <div class="circles">
            <td-circle></td-circle>
          </div>
          <div class="button" @click-button="${(event) => this.handleButtonClick(event).bind}">
            <td-button
              type="red"
            ></td-button>
          </div>
        </div>
      </div>
    `
  }

  handleButtonClick(e) {
    e.currentTarget.style = `
      transform: translate(-50%, 0);
    `;
  }
};

window.customElements.define(MainPageCompornent.is, MainPageCompornent);
export default MainPageCompornent;
