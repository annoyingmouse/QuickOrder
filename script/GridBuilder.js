import { setAttributes } from './helpers.js'
export class GridBuilder {
  constructor(rowsInput, columnsInput, orientationRadios, gridHolder) {
    this.width = null
    this.rowsInput = rowsInput
    this.columnsInput = columnsInput
    this.orientationCheckboxes = orientationRadios
    this.orientation = document.querySelector(
      `${this.orientationCheckboxes}:checked`
    ).id
    this.gridHolder = gridHolder
    this.rows = Number(rowsInput.value)
    this.columns = Number(columnsInput.value)
    this.modalSplit = this.rowsInput.closest('.modal-split')
    this.modal = this.modalSplit.closest('.modal')
    this.watchOrientation()
    this.observeVisibility()
    this.observeWidth()
    this.addListeners()
    this.render()
    this.gap = 2
    this.updatePanelsNumber = new Event('UpdatePanelNumber')
  }
  watchOrientation() {
    const orientationCheckboxes = [
      ...document.querySelectorAll(this.orientationCheckboxes),
    ]
    orientationCheckboxes.forEach((orientationCheckbox) => {
      orientationCheckbox.addEventListener('change', (e) => {
        this.orientation = document.querySelector(
          `${this.orientationCheckboxes}:checked`
        ).id
        this.render()
      })
    })
  }
  observeVisibility() {
    const observer = new MutationObserver(() => {
      if (this.modalSplit.style.display != 'none') {
        const computedStyle = getComputedStyle(this.gridHolder)
        let elementWidth = this.gridHolder.clientWidth
        elementWidth -=
          parseFloat(computedStyle.paddingLeft) +
          parseFloat(computedStyle.paddingRight)
        this.width = elementWidth
        this.render()
        const nextButton = this.modal.querySelector('.next')
        if (Number(this.modal.dataset.panels)) {
          nextButton.removeAttribute('disabled')
        } else {
          nextButton.disabled = true
        }
      }
    })
    observer.observe(this.modalSplit, {
      attributes: true,
      childList: true,
    })
  }

  observeWidth() {
    const observer = new ResizeObserver((entries) => {
      const e = entries[0] // should be only one
      this.width = e.contentRect.width
      this.render()
    })
    observer.observe(this.gridHolder)
  }

  addListeners() {
    this.rowsInput.addEventListener('change', (e) => {
      this.modal.dataset.rows = this.rowsInput.value
      this.rows = Number(this.rowsInput.value)
      this.render()
    })
    this.columnsInput.addEventListener('change', (e) => {
      this.modal.dataset.columns = this.columnsInput.value
      this.columns = Number(this.columnsInput.value)
      this.render()
    })
  }
  createDiv(width, height) {
    const div = document.createElement('div')
    setAttributes(div, {
      class: 'panel selected',
      width: `${width}px`,
      height: `${height}px`,
      style: `height: ${height}px; width: ${width}px`,
    })
    div.addEventListener('click', (e) => {
      const panel = e.target.closest('.panel')
      let panelsNumber = Number(this.modal.dataset.panels)
      if (panel.classList.contains('selected')) {
        panel.classList.remove('selected')
        panelsNumber -= 1
      } else {
        panel.classList.add('selected')
        panelsNumber += 1
      }
      this.modal.dataset.panels = `${panelsNumber}`
    })
    return div
  }
  render() {
    this.gridHolder.innerHTML = ''
    this.gridHolder.style.display = 'grid'
    this.gridHolder.style.gap = `${this.gap}px`
    this.gridHolder.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`
    this.gridHolder.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`
    const panelWidth = Number(this.modal.dataset.panelWidth)
    const panelHeight = Number(this.modal.dataset.panelHeight)
    const width = (this.width - (this.columns - 1) * this.gap) / this.columns
    const height =
      this.orientation === 'landscape'
        ? width * (panelWidth / panelHeight)
        : width * (panelHeight / panelWidth)
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        this.gridHolder.append(this.createDiv(width, height))
      }
    }
    this.modal.dataset.panels = `${this.columns * this.rows}`
  }
}
