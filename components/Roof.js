class Roof extends HTMLElement{
  static get observedAttributes() {
    return [
      'id',
      'classes',
      'image',
      'name',
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
        <div class="card-body">
          <h5 class="card-title text-center">${this.name}</h5>
        </div>
      </div>
    `
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
  get id() {
    return this.getAttribute('id')
  }
  get selected() {
    return this.classes.indexOf('selected')  >= 0
  }
}
window.customElements.define('mse-roof-card', Roof)