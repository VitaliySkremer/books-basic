import { View } from '../../common/view';

export class MainView extends View {
  constructor() {
    super();
    this.setTitle('поиск книг');
  }
  render() {
    const main = document.createElement('main');
    main.innerHTML = 'test';
    if (this.app) {
			this.app.innerHTML = '';
      this.app.append(main);
    }
  }
}
