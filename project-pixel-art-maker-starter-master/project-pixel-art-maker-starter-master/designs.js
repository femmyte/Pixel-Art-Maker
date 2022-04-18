// Select color input
const color = document.querySelector('#colorPicker')
// Select size input
const height = document.querySelector('#inputHeight')
const width = document.querySelector('#inputWidth')
// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', makeGrid)
const canvas = document.querySelector('#pixelCanvas')
function makeGrid(e) {
  e.preventDefault()
  for (let row = 1; row <= height.value; row++) {
    const tr = document.createElement('tr')
    for (let col = 1; col <= width.value; col++) {
      const td = document.createElement('td')
      tr.appendChild(td)
    }
    canvas.appendChild(tr)
  }
}
function asignColor(e) {
  e.target.style.background = color.value
}
canvas.addEventListener('click', asignColor)
