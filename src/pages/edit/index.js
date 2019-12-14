import { LitElement, html } from 'lit-element';
import './index.scss';

class TodoAppCompornent extends LitElement {
  static get is() {
    return 'td-page-edit';
  }

  static get path() {
    return '/edit';
  }

  constructor() {
    super();
  } 

  render() {
    return html`
      <div class="container">
        <div class="body">
          <div class="input">
            <input type="text" placeholder="朝ごはん食べる">
          </div>
        </div>
        <div class="foot">
          <div class="button">

          </div>
        </div>
      </div>
    `
  }
};
window.customElements.define(TodoAppCompornent.is, TodoAppCompornent);
export default TodoAppCompornent;