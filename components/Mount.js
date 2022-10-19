import { Card } from './Card.js'

class Mount extends Card {
  static get observedAttributes() {
    return ['classes', 'id', 'name', 'image', 'selected']
  }
  get html() {
    return `
      <div class="card h-100${this.selected ? ' bg-success text-white' : ''}">
        <img src="${this.image}" class="card-img-top" alt="${this.name}">
        <div class="card-body">
          <h5 class="card-title text-center">${this.name}</h5>
        </div>
      </div>
    `
  }
}
window.customElements.define('mse-mount-card', Mount)
