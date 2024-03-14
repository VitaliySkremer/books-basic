import { DivComponent } from '../../common/div-component';
import { IAppState } from '../../models/models';

export class Header extends DivComponent {
  constructor(readonly appState: IAppState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = '';
    this.el.classList.add('header');
    this.el.innerHTML = `
				<div>
					<img src="/static/Logo.svg" alt="Логотип">
				</div>
			`;
    return this.el;
  }
}
