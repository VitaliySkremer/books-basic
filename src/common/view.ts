export abstract class View {
  protected app: HTMLElement | null = null;
  constructor() {
    this.app = document.getElementById('root');
  }

  setTitle(title: string) {
    document.title = title;
  }

  render() {
    return;
  }

  destroy() {
    return;
  }
}
