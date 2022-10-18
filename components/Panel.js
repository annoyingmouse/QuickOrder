class Panel extends HTMLElement{
  static get observedAttributes() {
    return [
      'id',
      'classes',
      'name',
      'description',
      'image',
      'selected'
    ]
  }
  constructor() {
    super();
  }
  get html() {
    return `
      <div class="card h-100${this.selected ? ' bg-success text-white': ''}">
        <img src="${this.image}" class="card-img-top" alt="${this.name}">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title text-center t-tip">
            ${this.name}
            <span class="t-tip-text">${this.stripHtml(this.description)}</span>
          </h5>
          <p class="card-text truncated-3">
            ${this.stripHtml(this.description)}
          </p>
        </div>
      </div>
    `
  }
  stripHtml(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render()
    }
  }
  render() {
    this.classList.add(...this.classes)
    this.dataset.id = this.id
    this.innerHTML = this.html
  }
  get classes() {
    return this.getAttribute('classes').split(' ')
  }
  get image() {
    return this.getAttribute('image')
  }
  get name() {
    return this.getAttribute('name')
  }
  get description() {
    return this.getAttribute('description')
  }
  get id() {
    return this.getAttribute('id')
  }
  get selected() {
    return this.classes.indexOf('selected')  >= 0
  }
}
window.customElements.define('mse-panel-card', Panel)