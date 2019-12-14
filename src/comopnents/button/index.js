import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  static get properties() {
    return {
      type: { type: String }
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="Button" @click="${(event) => this.clickButton(event)}">
        追加する
    </div>
    `
  }

  clickButton(e) {
    const { type } = this;
    let link = '/edit';
    let styleTag = `
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      color: #FF6369;
    `;

    if(type == 'white') {
      link = '/';
      styleTag = `
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        color: white;
      `;
    }

    // 親のスタイルを調整するために親にイベントを伝える
    let clickButton = new CustomEvent('click-button', { 
      bubbles: true, 
      composed: true
    });
    this.dispatchEvent(clickButton);

    // buttonのスタイルを調整
    e.currentTarget.style = styleTag;

    // transitionが終わったらルーティング
    e.currentTarget.addEventListener('transitionend', () => {
      window.location.href = link;
    });
  }
};
window.customElements.define('td-button', ButtonCompornent);
export default ButtonCompornent;
