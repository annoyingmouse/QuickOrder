export const setAttributes = (element, attributes) => {
  for (const attr in attributes) {
    if (attributes.hasOwnProperty(attr)) {
      const attribute = attr
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase()
      element.setAttribute(attribute, attributes[attr])
    }
  }
}

const arrayRemove = (arr, value) => arr.filter((ele) => ele != value)

export const selectThing = (type) => {
  return (e) => {
    const clickedCard = e.target.closest('.card').parentNode
    const clickedCardClasses = clickedCard.getAttribute('classes').split(' ')
    const container = clickedCard.closest('.row')
    const modal = container.closest('.modal')
    if (
      modal.dataset[`${type}Id`] &&
      clickedCardClasses.indexOf('selected') < 0
    ) {
      const otherCards = [...container.childNodes]
      otherCards.forEach((card) => {
        if (card === clickedCard) {
          clickedCard.setAttribute(
            'classes',
            [...clickedCardClasses, 'selected'].join(' ')
          )
        } else {
          const cardClasses = card.getAttribute('classes').split(' ')
          card.setAttribute(
            'classes',
            arrayRemove(cardClasses, 'selected').join(' ')
          )
        }
      })
      modal.dataset[`${type}Id`] = clickedCard.dataset.id
    } else {
      if (clickedCardClasses.indexOf('selected') >= 0) {
        clickedCard.setAttribute(
          'classes',
          arrayRemove(clickedCardClasses, 'selected').join(' ')
        )
        modal.dataset[`${type}Id`] = ''
      } else {
        clickedCard.setAttribute(
          'classes',
          [...clickedCardClasses, 'selected'].join(' ')
        )
        modal.dataset[`${type}Id`] = clickedCard.dataset.id
      }
    }
    const modalType = modal.dataset.type
    const nextButton = document.querySelector('.next')
    if (modalType === type && modal.dataset[`${type}Id`]) {
      nextButton.removeAttribute('disabled')
    } else {
      nextButton.disabled = true
    }
    if (type === 'panel') {
      modal.dataset.aspectRatio = clickedCard.dataset.aspectRatio
    }
  }
}
