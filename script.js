let width = document.getElementById(`width`)
let mirrorButton = document.getElementById(`mirrorButton`)
let box = document.getElementById(`box`)

mirrorButton.addEventListener(`click`, showMirror)

width.addEventListener(`keydown`, keyPressed)
width.focus()

function showMirror() {
  let widthValue = width.value.trim()

  if (widthValue != `` && !isNaN(widthValue)) {
    if (widthValue > 500) {
      box.innerHTML = `Mirror width cannot be more than 500.`
    }
    else {
      box.innerHTML = ``

      let marginValue = 0
      let parentBox = box

      while (widthValue >= 10) {
        let childBox = document.createElement(`div`)
        childBox.style.width = `${widthValue}px`
        childBox.style.height = `${widthValue}px`
        childBox.style.backgroundSize = `${widthValue}px ${widthValue}px`
        childBox.style.marginTop = `${marginValue}px`

        parentBox.appendChild(childBox)

        widthValue = widthValue * 2/3
        marginValue = widthValue / 4
        parentBox = childBox
      }
    }
  }
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    showMirror()
  }
}