import { View } from './common/view';
import { IRoute } from './models/models';
import { MainView } from './views/main/main';

class App {
  currentView: View | undefined = undefined;
  routes: IRoute[] = [{ path: '', view: new MainView() }];
  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((r) => r.path === location.hash)?.view;
    this.currentView = view;
    if (this.currentView) {
      this.currentView.render();
    }
  }
}

new App();
