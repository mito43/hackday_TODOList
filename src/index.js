import { LitElement, html } from 'lit-element';
import './index.scss';

class sample extends LitElement {
  render() {
    return html`
    <div class="Sample">
      てすと
      <div class="Sample__start">
        ここから始まる
      </div>
    </div>
    `
  }
};
window.customElements.define('sample-component', sample);
export default sample;
