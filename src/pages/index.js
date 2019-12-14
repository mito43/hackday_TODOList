import './main/index.js';

import { LitElement, html } from 'lit-element';

class TodoAppCompornent extends LitElement {
  render() {
    return html`
      <td-page-main></td-page-main>
    `
  }
};
window.customElements.define('todo-app', TodoAppCompornent);
export default TodoAppCompornent;
