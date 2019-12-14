import { LitElement, html } from 'lit-element';
import router from '../router';

class TodoAppCompornent extends LitElement {

  firstUpdated() {
    window.Promise.resolve()
      .then(() => router)
      .then(() =>
        router.init({outlet: this.shadowRoot.querySelector('.outlet')})
      )
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return html`
      <div class="header">
        <a href="/">メイン</a>
        <a href="/test">テスト</a>
      </div>
      <div class="outlet"></div>
    `
  }
};
window.customElements.define('todo-app', TodoAppCompornent);
export default TodoAppCompornent;
