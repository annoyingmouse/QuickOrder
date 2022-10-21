import { prepModal } from './paging.js'
import { setAttributes, selectThing } from './helpers.js'
import { roofs, mounts } from '../data/data.js'
import panels from '../data/panels.json' assert { type: 'json' }
import inverters from '../data/inverters.json' assert { type: 'json' }
import catalogue from '../data/catalogue.json' assert { type: 'json' }
import { GridBuilder } from './GridBuilder.js'
;(() => {
  const cardClasses = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2'
  const launchButton = document.querySelector(
    '[data-target="#quickOrderModal"]'
  )
  const modalElement = document.getElementById('quickOrderModal')
  const quickOrderModal = new bootstrap.Modal(modalElement)
  const panelContainer = document.getElementById('panel-container')
  const roofContainer = document.getElementById('roof-container')
  const mountContainer = document.getElementById('mount-container')
  const inverterContainer = document.getElementById('inverter-container')
  prepModal(modalElement)
  launchButton.addEventListener('click', () => {
    quickOrderModal.show()
  })
  for (const [_, panel] of Object.entries(panels)) {
    if (
      Number(panel.wholesaleID) &&
      Number(panel.available) &&
      catalogue[panel.wholesaleID]
    ) {
      const catalogueItem = catalogue[panel.wholesaleID]
      const card = document.createElement('mse-panel-card')
      setAttributes(card, {
        classes: cardClasses,
        weight: panel.weight,
        id: panel.ID,
        name: catalogueItem.title,
        description: catalogueItem.shortDescription,
        width: panel.width,
        height: panel.height,
        price: catalogueItem.price,
      })
      if (catalogueItem.photourl) {
        card.setAttribute(
          'image',
          `https://midsummerwholesale.co.uk${catalogueItem.photourl}`
        )
      }
      card.addEventListener('click', selectThing('panel'))
      panelContainer.append(card)
    }
  }
  roofs.forEach((roof) => {
    const card = document.createElement('mse-roof-card')
    setAttributes(card, {
      classes: cardClasses,
      id: roof.id,
      name: roof.name,
    })
    if (roof.image) {
      card.setAttribute('image', roof.image)
    }
    card.addEventListener('click', selectThing('roof'))
    roofContainer.append(card)
  })
  mounts.forEach((mount) => {
    const card = document.createElement('mse-mount-card')
    setAttributes(card, {
      classes: cardClasses,
      id: mount.id,
      name: mount.name,
    })
    if (mount.image) {
      card.setAttribute('image', mount.image)
    }
    card.addEventListener('click', selectThing('mount'))
    mountContainer.append(card)
  })
  new GridBuilder(
    document.getElementById('rows'),
    document.getElementById('columns'),
    'input[name="orientation"]',
    document.getElementById('gridHolder')
  )
  for (const [_, inverter] of Object.entries(inverters)) {
    if (
      Number(inverter.wholesaleID) &&
      Number(inverter.available) &&
      catalogue[inverter.wholesaleID]
    ) {
      const catalogueItem = catalogue[inverter.wholesaleID]
      const card = document.createElement('mse-inverter-card')
      setAttributes(card, {
        classes: cardClasses,
        weight: inverter.weight,
        id: inverter.ID,
        name: catalogueItem.title,
        description: catalogueItem.shortDescription,
        price: catalogueItem.price,
      })
      if (catalogueItem.photourl) {
        card.setAttribute(
          'image',
          `https://midsummerwholesale.co.uk${catalogueItem.photourl}`
        )
      }
      card.addEventListener('click', selectThing('inverter'))
      inverterContainer.append(card)
    }
  }
})()
