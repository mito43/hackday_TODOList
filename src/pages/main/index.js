import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { getRandomInt } from '../../common/getRandomInt';
import './index.scss';
import '../../comopnents/header';
import '../../comopnents/circle';
import '../../comopnents/button';
import '../../comopnents/modal';

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
      isUnshow: { type: Boolean },
      isAnime: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.isUnshow = true;
    this.isAnime = false;
    this.setIsShow(getRandomInt(5));
  }

  render() {
    const { isUnshow, isAnime } = this;
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
      <div class="${classMap({
        adds: true,
        unshow: isUnshow
      })}" ?isshow="${!isUnshow}" ?isanime="${isAnime}">
        <div class="adds__item">
          <div class="adds__closeButton" @click="${this.handleCloseButtonClick}">X</div>
          <td-modal></td-modal>
        </div>
      </div>
    `
  }

  setIsShow(int) {
    setTimeout(() =>{
      this.isUnshow = false;
    }, int * 1000);
    setTimeout(() =>{
      this.isAnime = true;
    }, int * 1100);
  }

  handleButtonClick(e) {
    e.currentTarget.style = `
      transform: translate(-50%, 0);
    `;
  }

  handleCloseButtonClick() {
    this.isUnshow = true;
  }
};

window.customElements.define(MainPageCompornent.is, MainPageCompornent);
export default MainPageCompornent;
