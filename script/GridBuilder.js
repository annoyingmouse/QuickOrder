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
    this.modal = this.rowsInput.closest('.modal')
    this.watchOrientation()
    this.observeWidth(this.gridHolder)
    this.addListeners()
    this.render()
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
        console.log(this.orientation)
      })
    })
  }

  observeWidth() {
    const observer = new ResizeObserver((entries) => {
      const e = entries[0] // should be only one
      this.width = e.contentRect.width
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
  createDiv(width) {
    const div = document.createElement('div')
    div.style.width = '${width}px'
    div.style.height = '20px'
    div.style.backgroundColor = 'red'
    return div
  }
  render() {
    this.gridHolder.innerHTML = ''
    this.gridHolder.style.display = 'grid'
    this.gridHolder.style.gap = '1px'
    this.gridHolder.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`
    this.gridHolder.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        this.gridHolder.append(this.createDiv(this.width / this.columns))
      }
    }
  }
  update() {}
  // const rows = document.getElementById('rows')
  // const columns = document.getElementById('rows')
  // const modal = rows.closest('.modal')
  // modal.dataset.rows = rows.value
  // modal.dataset.columns = columns.value
  // rows.addEventListener('change', (e) => {
  //   console.log(Number(rows.value))
  // })
  // columns.addEventListener('change', (e) => {
  //   console.log(Number(columns.value))
  // })
}
