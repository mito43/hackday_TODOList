import { LitElement, html } from 'lit-element';
import router from '../router';
import { storage } from '../storage';

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

      // ローカルストレージサンプル
      const counter = storage.getStorage('LoginCount') || 0;
      storage.setStorage('LoginCount', counter + 1);
  }

  render() {
    return html`
      <div class="outlet"></div>
    `
  }
};
window.customElements.define('todo-app', TodoAppCompornent);
export default TodoAppCompornent;
