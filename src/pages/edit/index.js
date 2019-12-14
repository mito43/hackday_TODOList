import { LitElement, html } from 'lit-element';
import './index.scss';
import '../../comopnents/button';
import { storage } from '../../storage';

class TodoAppCompornent extends LitElement {
  static get is() {
    return 'td-page-edit';
  }

  static get path() {
    return '/edit';
  }

  static get properties() {
    return {
      isOnInputed: { type: Boolean },
      textareaValue: { type: String },
      isDOMContentLoaded: { type: Boolean },
      oldList: { type: Array },
      todoObj: { type: Object },
    }
  }

  constructor() {
    super();
    this.isOnInputed = false;
    this.textareaValue = '朝ごはんを食べる';
    this.isDOMContentLoaded = true;

    // domが読み込まれたらattributeを追加できるようにしたい
    // this.isDOMContentLoaded = false;
    // this.addEventListener('DOMContentLoaded', () => {
    //   this.isDOMContentLoaded = true;
    // });
  }

  render() {
    const { textareaValue, isDOMContentLoaded } = this;
    return html`
      <div class="container" ?is-show=${isDOMContentLoaded}>
        <div class="body">
          <div class="input">
            <textarea
              @focus="${(event) => this.handleOnFocus(event)}"
              @keyup="${(event) => this.handleOnInput(event)}"
            >${textareaValue}</textarea>
          </div>
        </div>
        <div class="button" @click-button="${(event) => this.handleButtonClick(event)}">
          <td-button
           type="white"
          ></td-button>
        </div>
      </div>
    `
  }

  // 初めてフォーカスが当たったらtextareaを初期化
  handleOnFocus(e) {
    if(this.isOnInputed) {
      return;
    }
    e.currentTarget.innerHTML = '';
    e.currentTarget.value = '';
    this.isOnInputed = true;
  }

  // textareaに文字が入力されたら再レンダー
  handleOnInput(e) {
    this.textareaValue = e.currentTarget.value;
  }

  handleButtonClick(e) {
    if (!!storage.getStorage('TodoList')) {
      const obj = storage.getStorage('TodoList');
      this.oldList = JSON.parse(obj).todoList;
    }
    this.oldList.push({text: this.textareaValue});
    this.todoObj = {todoList: this.oldList};
    storage.setStorage('TodoList', JSON.stringify(this.todoObj));
    e.currentTarget.style = `
      transform: translate(-50%, 0);
    `;
  }
};
window.customElements.define(TodoAppCompornent.is, TodoAppCompornent);
export default TodoAppCompornent;