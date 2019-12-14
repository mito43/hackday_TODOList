import { LitElement, html } from 'lit-element';
import './index.scss';
import '../../comopnents/header';
import '../../comopnents/button'

// このファイルに作ったコンポーネントを入れていく

class TodoAppCompornent extends LitElement {
  render() {
    return html`
      <div class="container">
        <div class="header">
          <td-header></td-header>
        </div>
        <div class="button">
          <td-button></td-button>
        </div>
      </div>
    `
  }
};
window.customElements.define('todo-app', TodoAppCompornent);
export default TodoAppCompornent;