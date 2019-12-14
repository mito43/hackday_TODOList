import { Router as VaadinRouter } from '@vaadin/router';
import MainPage from '../pages/main/index.js';
import TestPage from '../pages/test/index.js';

class Router {
  constructor () {
    this.router = null;
    this.pages = [
      MainPage,
      TestPage
    ];
  }

  init({ outlet }) {
    return window.Promise.resolve().then(() => {
      debugger
      this.vaadinRouter = new VaadinRouter(outlet);
      const routes = [];
      this.pages.forEach(Page => {
        routes.push({
          path: Page.path,
          component: Page.is
        });
      });
      this.vaadinRouter.setRoutes(routes);
      return this;
    });
  }
}
export default new Router();
