export const prepModal = (modal) => {
  let pageTrack = 0
  const backButton = createButton('Back', 'back', true)
  const nextButton = createButton('Next', 'next', false, true)
  const pages = [...modal.querySelectorAll('.modal-split')]
  const footer = modal.querySelector('.modal-footer')
  const title = modal.querySelector('#quickOrderTitle')
  if (pages.length !== 0) {
    pages.forEach((page) => (page.style.display = 'none'))
    const buttons = document.createDocumentFragment()
    buttons.append(backButton)
    buttons.append(nextButton)
    footer.append(buttons)
  }
  showAndHide(pages, pageTrack, title)
  modal.dataset.type = pages[0].dataset.object
  backButton.addEventListener('click', () => {
    if (pageTrack === 1) {
      backButton.style.display = 'none'
    }
    if (pageTrack === pages.length - 1) {
      nextButton.innerText = 'Next'
    }
    if (pageTrack > 0) {
      pageTrack--
      showAndHide(pages, pageTrack, title)
    }
    modal.dataset.type = pages[pageTrack].dataset.object
    if (modal.dataset[`${modal.dataset.type}Id`]) {
      nextButton.removeAttribute('disabled')
    } else {
      nextButton.disabled = true
    }
  })
  nextButton.addEventListener('click', () => {
    if (pageTrack === 0) {
      backButton.style.display = 'unset'
    }
    if (pageTrack === pages.length - 2) {
      nextButton.innerText = 'Submit'
    }
    if (pageTrack === pages.length - 1) {
      console.log('Submit here')
    }
    if (pageTrack < pages.length - 1) {
      pageTrack++
      showAndHide(pages, pageTrack, title)
    }
    modal.dataset.type = pages[pageTrack].dataset.object
    if (modal.dataset[`${modal.dataset.type}Id`]) {
      nextButton.removeAttribute('disabled')
    } else {
      nextButton.disabled = true
    }
  })
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'data-panels' &&
        modal.dataset.type === 'layout'
      ) {
        if (!Number(modal.dataset.panels)) {
          nextButton.disabled = true
        } else {
          nextButton.removeAttribute('disabled')
        }
      }
    })
  })
  observer.observe(modal, {
    attributes: true,
  })
}

const createButton = (text, className, hide = false, disabled = false) => {
  const button = document.createElement('button')
  button.setAttribute('type', 'button')
  button.classList.add('btn', 'btn-primary', className)
  if (hide) {
    button.style.display = 'none'
  }
  if (disabled) {
    button.disabled = true
  }
  button.innerText = text
  return button
}

const showAndHide = (pages, pageTrack, title) => {
  pages.forEach((page, i) => {
    if (pageTrack === i) {
      page.style.display = 'unset'
      title.innerText = `- ${page.dataset.title}`
    } else {
      page.style.display = 'none'
    }
  })
}
