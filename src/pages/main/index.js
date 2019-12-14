import { LitElement, html } from 'lit-element';
import './index.scss';
import '../../comopnents/button/index.js';

// このファイルに作ったコンポーネントを入れていく

class TodoAppCompornent extends LitElement {
  render() {
    return html`
    <div class="TODO">
      てすと
      <div class="TODO__start">
        ここから始まる
      </div>
    </div>
    <c-button></c-button>
    `
  }
};
window.customElements.define('todo-app', TodoAppCompornent);
export default TodoAppCompornent;