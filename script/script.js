
const panels = [
  {
    id: 1,
    name: 'EGing 195W',
    quantity_available: 200,
    description: "Eging Solar monocrystalline solar panels have an impressive efficiency and come with a 25-year warranty of power output (at least 80% rated power after 25 years, and 90% after 10 years). Eging have strong presence in the solar PV research industry and this is reflected in the design of their modules.<p>One of our best value panels.</p>",
    cost: 114.00
  },
  {
    id: 5,
    name: 'Perlight 250W Mono Black',
    quantity_available: 150,
    description: 'Eoplly monocrystalline solar panels have an impressive efficiency, meet all the quality standards of the Microgeneration Certification Scheme in the UK, and come with a 25-year warranty of power output (at least 80% rated power after 25 years, and 90% after 10 years). They also have a 5-year workmanship warranty. These panels have come down in cost significantly recently, and are extremely good value.',
    cost: 124.00
  },
  {
    id: 111,
    name: 'Renesola 255W mono black',
    quantity_available: 95,
    description: 'Renesola is an international leading brand and technology provider of a range of green energy products. These solar PV modules come from a manufacturer who are known for the quality and reliability of their products, with a reputation for high performance and cost competitiveness.',
    cost: 104.00
  },
  {
    id: 11,
    name: 'Panasonic 250W',
    quantity_available: 20,
    description: 'Panasonic N Series 240W panel with HIT (Heterojunction with Intrinsic Thin layer) solar cells is made of a thin mono crystalline silicon wafer surrounded by ultra-thin amorphous silicon layers. This product provides the industry\'s leading performance and value using state-of-the-art manufacturing techniques. Even at high temperatures, the HIT solar cell can maintain higher efficiency than a conventional crystalline silicon solar cell. They\'re unusually small size means they have a high W/mÂ², making them ideal for when space is at a premium.',
    cost: 134.00
  },
  {
    id: 1,
    name: 'EGing 195W',
    quantity_available: 200,
    description: 'Eging Solar monocrystalline solar panels have an impressive efficiency and come with a 25-year warranty of power output (at least 80% rated power after 25 years, and 90% after 10 years). Eging have strong presence in the solar PV research industry and this is reflected in the design of their modules. One of our best value panels.',
    cost: 114.00
  },
  {
    id: 5,
    name: 'Perlight 250W Mono Black',
    quantity_available: 150,
    description: 'Eoplly monocrystalline solar panels have an impressive efficiency, meet all the quality standards of the Microgeneration Certification Scheme in the UK, and come with a 25-year warranty of power output (at least 80% rated power after 25 years, and 90% after 10 years). They also have a 5-year workmanship warranty. These panels have come down in cost significantly recently, and are extremely good value.',
    cost: 124.00
  },
  {
    id: 111,
    name: 'Renesola 255W mono black',
    quantity_available: 95,
    description: 'Renesola is an international leading brand and technology provider of a range of green energy products. These solar PV modules come from a manufacturer who are known for the quality and reliability of their products, with a reputation for high performance and cost competitiveness.',
    cost: 104.00
  },
  {
    id: 11,
    name: 'Panasonic 250W',
    quantity_available: 20,
    description: 'Panasonic N Series 240W panel with HIT (Heterojunction with Intrinsic Thin layer) solar cells is made of a thin mono crystalline silicon wafer surrounded by ultra-thin amorphous silicon layers. This product provides the industry\'s leading performance and value using state-of-the-art manufacturing techniques. Even at high temperatures, the HIT solar cell can maintain higher efficiency than a conventional crystalline silicon solar cell. They\'re unusually small size means they have a high W/mÂ², making them ideal for when space is at a premium.',
    cost: 134.00
  },
]

const roofs = [
  {
    id: 'slate',
    image: 'data:image/png;base64,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',
    name: 'Slate'
  },
  {
    id: 'composite',
    image: 'data:image/png;base64,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',
    name: 'Composite'
  },
  {
    id: 'concrete',
    image: 'data:image/png;base64,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',
    name: 'Concrete'
  },
  {
    id: 'plain_tile',
    image: 'data:image/png;base64,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',
    name: 'Plain tile'
  },
  {
    id: 'pan_tile',
    image: 'data:image/png;base64,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',
    name: 'Pan tile'
  },
  {
    id: 'sheet_metal',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAACzVBMVEWDlJ+ClJ2Akpx+kJp7jZZ/kZuFmKF6jJZ2iJF9j5l6i5WGmKJ3iZNyhI+ElqCBlp+Bk5qBk5yAkZl4ipQ+R1GHmaOEkpx7iJFxg42ImqSBjpl8jphugIpBS1WIlp59jpqGlJ5+kJyCkJp8jpZ5h488Rk+LnaaJm6KKmKCIlqB6jZl9kJh9jph5jpd4ipF2iI9DTlc3QEuAk5+FlZ19kpt5ipE/SlE6SFA5Q06HmaCFl56BkZ55jJN4h5J0hpBufINFT1c+R044RU2Km6Vzho53iY11g4xsf4k/SVQ9SlM7RFA3QEiNnqWJmKJ/jpZ7jJR6jZNVYWszPEaDlp14ipeBkJZ+jJV9ipR2iJN2ipB2hY1xhIt4gopwf4hhbXZDTlpDTVI8Rkw4Q0yNnamMm6KDlqGAlJ2Fk5yCkZh6iJR0h5J2hI1wgoxzgIx1gop2holwgolzgIl0f4dsfIZxf4VOXGdGTFk2Q0uMoaeIm6aNm6WFmKOCmaCGl5+DkpqAjpd9i5J1iZJ7ipF3hJB4ho9ugYx0hYppfYZweYNoeYNsd39baXVcaXFGT1tDS1g/RlNCSVE8QU40QEwzQkkzQEYwPEGQo6uPoKqMnaKLmaJ/kZR5ipR1ipR+jZJ8iY1zg4p0g4dmeIJjc31pdntfanJUZG5SX2hOXWNLWWFLVF9FUV9JU143Q1CUoauDmqOIm596kZl/kJl8ipiAjpNyhZFzh5BvgoZ2gIZqeYRqeX5cZG1daGxJWGJEUlpAS1c8RlJARVI6Qkg1PEicq7OWpq6Sn6iLmaSClZmEjZiAk5d1jZR/hZR9jJN8hY95h4xzfINjd4FndH9mdHllcXdea3ZXZGlTXWdQWmRSX2NCVV1LV1tIUVs5P0wrOkOUprCImaSDkaB7kp2Bi5ZseX5gcHppb3o1RU8uPkgwOEOClpd9i5VviI9nanlkZnNXWmm68z5tAAAIEklEQVRIxw2VU7ZdCRQA9zGubdv32bZt21Zs27ZtO2krdidtawydCdRaVT8FW7VEfrvztLN7jj5MXJSx70irLvvYXEdZIP+j/E+6PlUr1C7j17UHpak5Gw8b5VCQphU7txldxqp44ezZxUV7jyWvDnllEecHCj/6ZPvpGfJKi9CSrlgR3JiTeiwM5KQqK0zvlMtjxQGLvcxTl/EiLznlTQAR+uM/nuF0ujCcCUettUlHpjYGg7CKz2kbQ5yzw8KEluJiR358RsaLlnWpJxe5wjx1MXojqRJxywWWCGvSy5RNmyDqOVBpEV5SRhB8QtkunrYjY/eLdWt1Jxv4Gt/fs2M5aXx37y4Onqmof2lLhqjfDiMyIZcCu0pEILV6x9nijD03770LaTpw5syXNUJBOEwPvbRL4Pqm/pvGEFiXklLS08ahGMBIQbglEO/Ir7AqVrRIpaf2t/3I0sCAjIClXwo9lviRJ/Dqvk1aYoI0nnIrn5QJhJ6irvauvqRHumjdhpUd3ymVKgkiwgQ16Z4yPHMERkuiQ1ZPqKitoiwAjYD01Pn1esXF8RXfhkRvWElwQItSJDYLm8+TEMxC+Lz+ZfDOhltyoyqByycRFLNEBObqK4YGl32bu/qPW3YEuxxOzdLwO3n9FOoF66LMI6nB6GN661ZLfOxMFOGggYjYsDCrYtlx6b3fbg2Q9qWd4QIEAOfRCBi5C5NKItfodDOqYjx1AAggRHwgX++IqOhLTg7JbarkAM1ARweY3NWXYGucsrL+7WRpdk4XIi5zm+JQBLBAYbsw5rMdC25PrtWtXij34uWh4DbMNC0GIpSvuLrn+Aex2xF2zyV36EzoFJC1e7edrfnii6H/1q/NvTMA3h6JoWMmxIXCXKNerVAsKbFJQ45Xfcr37Qo/p0L4oUquvS1GHPjqhq25NfVa2/e8XpSLcnBQVJmNasWVpFWtkdEbC9Mwdr6dtQPgXArJd+Cfz7uxOTn4/sn3HRre9HBGBIXWqg/8HUPjNzZFH5tq2GKfn27XFpB8KhGPjXHoFaONkaW63JUkYJc7uTKIOR9RJIzdcXHfnlWboqLuJpAYpuQYET7hOR9h2fJZbMbDQ5HBkKiSMBTLQjWgIr2JCVjF7ov7hm5uTpaGZKYhRYpCpgwpm13kj5227bOGhwfz7kunbs0WCHhcABmJ01x9oTjjyoJnm99N2gZdrkUj8QgijGkXL5nmiRE39B1sTimNOiru7CwHhCSBoRQu3CG8ntR4b7100+B2vdzvEQrD8s9G1MUyQPV1P01u3hj1ZrHJBIAyhAhdmIB4xGGZ9f/ey1298cBpc3GNMEY8Z9s2T7/JdOF8xtCjlNSc9292YeBFSI5GRtA0AfhOfOh1y7oH2do4AlvMBRHJISiaS2lwdt/4203NIWu+gixg6S0SPp7IJRAvd9/QoVJb9u/7t2AIj+UkoigqUVJ2FY6PHXy9Ofr4WmC1wKGBj+5MZBGE6s4cfNb6Phj1/DQk4DwRSchIiiuSAVPsTzoqzXsAM2geaPgEgrI0SwA+N9O6KjVyKrexwMWyrIwjS+NoaAnx43R62Pp6czLI1coxQORyQCmaRQ0GZri2cXNUU+kvM+QM3p+GoCQHS+wPDTUkDo7ebIFKc0GC1uuSmxGUmj8/VIJidcOHpA/W5DaaQaakUAA+h1Feqp4Zp13w8CgMuNQFO/vVZjMqCqfSeST3XHjtolXrJ9eUrixg03gMCR98mQalAQx0YAmcuGZWg3dA7SI0KOpLrws/p2EGvvp1bUhT9kqOhpCwIj6mIeY0ZJWbMP8VsEkVZqDw5cJYfxmSHv6YIlGJ5PLoIZ0tJ/WIi9tG8/gIjoS6L/QkoHwJJJ/M6TODULgcd/iFZb1bDih94T7BNz+VTN2OmloFO1VKVEaJyqvN1/7CBAJoseWcGPtUDVwtwmFRnCaXIyqa6/X3Nea0ZkcfVmP2LK6dEXkTzAlZ3wkgJZh950Tm3MoZiVo+g8sQnmSMJkU1ePxIYzDPdmqiwMz0a1BELD9Qgv2ignnBoK3p5EK5uYB7DeHThIjHW85Qs768XLTokC7vbvaEukC2FIst/ORADqTzYPfocVur9MigusuY3nBexklI/D1xjDizS+DoG38Wmbt2w4ScVdEZHzu7trOcXsi01qesS5k6arXOaR8bZhEueXg5f3/WdI5f/PX165O52dFNlV7RF9fbP/4IQt2gsF692nw/MvXo7op5Z5coWQCOCicX9/ria4qKr/yzOvfuqQkv9ueOi3P0adM7QK7YuzupuaWltWSnpsOdvhST9fpUlIHHw0W4v3h8ma5UF73m85628qxZs6Y5oLKqa8/Bn5tTIlMnQGISzF/aqxKwSJyERxOIJVC796ku++6k7oeBUPfjafg0UFd1L1gy79cWaWvUhLGHFfG0ApJi4gzVPAn6YW5F4yt00nfrT/xgqJ7+WECAOmxeYfeSq4/ydFLbq58+hEzM8gl8hjgT3U+LY87VWJKWSddPnjpxYWa1aX81ZG53VhRG7KlflheZt/4GxlISrZYSGExxDK30C32z0vGGZWseNJ26szCuvHox7K11Oisrvh6pX/HHuuTSlQkErtEuxQxugwiV1A2foRwRi5JWREalRjf1XIhzQ0VShNM4d0H34OjPkc15G573YBitVZa7DRiK1Wh9PiJm2DryJBgiPWkbAB84u0eqts8RB+YtGL15PyVnw2GcYpnFPLdJwsXE8ftxxu8QD48/fZtXGnl7eef/ALNPek7dDmIAAAAASUVORK5CYII=',
    name: 'Sheet metal'
  }
]

const order = {
  panel: {
    position: 0,
    id: null
  },
  roof: {
    position: 0,
    id: null
  }
}

const setAttributes = (element, attributes) => {
  for (const attr in attributes) {
    if(attributes.hasOwnProperty(attr)) {
      // converts camelCase to hyphen-separated, lowercase, string
      // e.g. "dataId" becomes "data-id"
      const attribute = attr.split(/(?=[A-Z])/).join('-').toLowerCase()
      element.setAttribute(attribute, attributes[attr])
    }
  }
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
const showAndHide  = (pages, pageTrack, title) => {
  pages.forEach((page, i) => {
    if(pageTrack === i){
      page.style.display = 'unset'
      title.innerText = `- ${page.dataset.title}`
    }else{
      page.style.display = 'none'
    }
  })
}
const prep_modal = (modal) => {
  let pageTrack = 0
  const backButton = createButton('Back', 'back', true)
  const nextButton = createButton('Next', 'next', false, true)
  const pages = [...modal.querySelectorAll('.modal-split')]
  const footer = modal.querySelector('.modal-footer')
  const title = modal.querySelector('#quickOrderTitle')
  if (pages.length !== 0) {
    pages.forEach(page => page.style.display = 'none')
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
      pageTrack--;
      showAndHide(pages, pageTrack, title)
    }
    modal.dataset.type = pages[pageTrack].dataset.object
    if(order[modal.dataset.type].id){
      nextButton.removeAttribute('disabled')
    }else{
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
      pageTrack++;
      showAndHide(pages, pageTrack, title)
    }
    modal.dataset.type = pages[pageTrack].dataset.object
    if(order[modal.dataset.type].id){
      nextButton.removeAttribute('disabled')
    }else{
      nextButton.disabled = true
    }
  })
}

const arrayRemove = (arr, value) => arr.filter(ele => ele != value)

const selectThing = (type) => {
  return e => {
    const clickedCard = e.target.closest('.card').parentNode
    const clickedCardClasses = clickedCard.getAttribute('classes').split(' ')
    const container = clickedCard.closest('.row')
    if(order[type].id && clickedCardClasses.indexOf('selected') < 0){
      const otherCards = [...container.childNodes]
      otherCards.forEach(card => {
        if(card === clickedCard){
          clickedCard.setAttribute('classes', [...clickedCardClasses, 'selected'].join(' '))
        }else{
          const cardClasses = card.getAttribute('classes').split(' ')
          card.setAttribute('classes', arrayRemove(cardClasses, 'selected').join(' '))
        }
      })
      order[type].id = clickedCard.dataset.id
    }else{
      if (clickedCardClasses.indexOf('selected') >= 0) {
        clickedCard.setAttribute('classes', arrayRemove(clickedCardClasses, 'selected').join(' '))
        order[type].id = null
      } else {
        clickedCard.setAttribute('classes', [...clickedCardClasses, 'selected'].join(' '))
        order[type].id = clickedCard.dataset.id
      }
    }
    const modal = clickedCard.closest('.modal')
    const modalType = modal.dataset.type
    const nextButton = document.querySelector('.next')
    if(modalType === type && order[type].id){
      nextButton.removeAttribute('disabled')
    }else{
      nextButton.disabled = true
    }
  }
}


(() => {
  const cardClasses = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2'
  const launchButton = document.querySelector('[data-target="#quickOrderModal"]')
  const modalElement = document.getElementById('quickOrderModal')
  const quickOrderModal = new bootstrap.Modal(modalElement)
  const panelContainer = document.getElementById('panel-container')
  const roofContainer = document.getElementById('roof-container')
  prep_modal(modalElement)
  launchButton.addEventListener('click', () => {
    quickOrderModal.show()
  })
  panels.forEach(panel => {
    const card = document.createElement('mse-panel-card')
    setAttributes(card, {
      classes: cardClasses,
      id: panel.id,
      name: panel.name,
      description: panel.description,
      image: "https://via.placeholder.com/150",
    })
    card.addEventListener('click', selectThing('panel'))
    panelContainer.append(card)
  })
  roofs.forEach(roof => {
    const card = document.createElement('mse-roof-card')
    setAttributes(card, {
      classes: cardClasses,
      id: roof.id,
      name: roof.name,
      image: roof.image,
    })
    card.addEventListener('click', selectThing('roof'))
    roofContainer.append(card)
  })
})()

