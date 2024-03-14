import { View } from '../../common/view';
import { IAppState } from '../../models/models';
import onChange from 'on-change';

export class MainView extends View {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };
  constructor(readonly appState: IAppState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('поиск книг');
  }
  appStateHook(path: string) {
		if(path === 'favorites') {
			this.render();
		}
	}
  render() {
    const main = document.createElement('main');
    main.innerHTML = `Число книг ${this.appState.favorites.length}`;
    if (this.app) {
      this.app.innerHTML = '';
      this.app.append(main);
    }
  }
}
