import { LitElement, html } from 'lit-element';
import './index.scss';

// このファイルに作った

class TodoAppCompornent extends LitElement {
  render() {
    return html`
    <div class="TODO">
      てすと
      <div class="TODO__start">
        ここから始まる
      </div>
    </div>
    `
  }
};
window.customElements.define('todo-app', TodoAppCompornent);
export default TodoAppCompornent;