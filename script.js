'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector
  this.height = height
  this.width = width
  this.bg = bg
  this.fontSize = fontSize
  this.render = function (selector, height, width, bg, fontSize, text) {

    let newElem;

    if (selector.substr(0, 1) === '.') {
      newElem = document.createElement('div')
      newElem.classList.add(selector.substr(1))
      document.body.append(newElem)
      newElem.textContent = prompt(text)
    }

    else if (selector.substr(0, 1) === '#') {
      newElem = document.createElement('p')
      newElem.classList.add(selector.substr(1))
      document.body.append(newElem)
      newElem.textContent = prompt(text)
    }

    newElem.style.cssText = `
      height: ${height};
      width: ${width};
      background: ${bg};
      font-size: ${fontSize}px;
    `
  }
}

const newElem = new DomElement()

newElem.render('.best', '100px', '100px', 'green', '14')