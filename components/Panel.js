import { Card } from './Card.js'

class Panel extends Card {
  static get observedAttributes() {
    return [
      'id',
      'classes',
      'name',
      'description',
      'image',
      'selected',
      'width',
      'height',
      'price',
    ]
  }
  get html() {
    return `
      <div class="card h-100${this.selected ? ' bg-success text-white' : ''}">
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
    let doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
  }
  render() {
    this.classList.add(...this.classes)
    this.dataset.id = this.id
    this.dataset.aspectRatio = `${this.width / this.height}`
    this.innerHTML = this.html
  }
  get height() {
    return Number(this.getAttribute('height'))
  }
  get width() {
    return Number(this.getAttribute('width'))
  }
  get price() {
    return Number(this.getAttribute('price'))
  }
}
window.customElements.define('mse-panel-card', Panel)
