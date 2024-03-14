export abstract class DivComponent {
	el: HTMLDivElement;
	constructor() {
		this.el = document.createElement('div');
	}

	render() {
		return this.el;
	}
}