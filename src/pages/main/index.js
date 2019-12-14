import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { getRandomInt } from '../../common/getRandomInt';
import { repeat } from 'lit-html/directives/repeat';
import './index.scss';
import '../../comopnents/header';
import '../../comopnents/circle';
import '../../comopnents/button';
import '../../comopnents/modal';
import { storage } from '../../storage';

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
      isAnime: { type: Boolean },
      todoList: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    this.isUnshow = true;
    this.isAnime = false;
    this.setIsShow(getRandomInt(3));
    this.data = storage.getStorage('TodoList');
    this.todoList = !!this.data ? JSON.parse(this.data).todoList : [{text: '何もないよ'}];
  }

  updated() {
    this.moveCircles(5000);
  }


  render() {
    const { todoList, isUnshow, isAnime } = this;
    return html`
      <div class="container" is-show>
        <div class="header">
          <td-header></td-header>
        </div>
        <div class="body">
          <div class="circles">
            ${repeat(
              todoList,
              item => html`
              <div class="circles__item">
                <td-circle>${item.text}</td-circle>
              </div>
            `)}
          </div>
          <div class="button" @click-button="${(event) => this.handleButtonClick(event)}">
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

  moveCircles(sec) {
    const circles = this.shadowRoot.querySelector('.circles');
    const circlesWidth = circles.clientWidth;
    const circlesHeight = circles.clientHeight;
    [...circles.children].forEach(circle => {
      setInterval((() => {
        const randomX = getRandomInt(circlesWidth-100);
        const randomY = getRandomInt(circlesHeight-200);
        circle.style = `
          top: 0;
          left: 0;
          transform: translate3d(${randomX}px, ${randomY}px, 0);
        `;
      }), sec);
    });
  }

  setIsShow(int) {
    // setTimeout(() =>{
    //   this.isUnshow = false;
    // }, int * 1000);
    // setTimeout(() =>{
    //   this.isAnime = true;
    // }, int * 1100);
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
