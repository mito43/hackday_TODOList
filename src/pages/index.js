import './main/index.js';
import './test/index.js';

import { LitElement, html } from 'lit-element';

class TodoAppCompornent extends LitElement {
  render() {
    return html`
      <div class="header">
        <a href="/">メイン</a>
        <a href="/test">テスト</a>
      </div>
      <div id="main"></div>
    `
  }
};
window.customElements.define('todo-app', TodoAppCompornent);
export default TodoAppCompornent;
