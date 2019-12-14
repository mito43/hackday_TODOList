import { LitElement, html } from 'lit-element';
import './index.scss';

class ButtonCompornent extends LitElement {
  static get is() {
    return 'td-circle';
  }

  static get properties() {
    return {
      text: { type: String }
    }
  }

  constructor() {
    super();
    this.text = '';
  }

  render() {
    const { text } = this;
    return html`
      <div class="circle">
        <div class="circle__inner">
          ${text}
        </div>
      </div>
    `
  }

  click(e) {
    const { text } = this;
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
window.customElements.define(ButtonCompornent.is, ButtonCompornent);
export default ButtonCompornent;
