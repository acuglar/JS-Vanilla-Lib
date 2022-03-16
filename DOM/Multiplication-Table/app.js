const table = document.querySelector('[data-js="form-table"]')
const columnsElem = document.querySelector('[data-js="columns"]')
const rowsElem = document.querySelector('[data-js="rows"]')
const buttonElem = document.querySelector('[data-js="render-table"]')
const colorElem = document.querySelector('[data-js="table-header-colors"]')

const log = (...values) => console.log(...values)

let tableContent = ''
let color = ''

const renderColumns = e => {
  tableContent = ''

  let { value: columns } = e.target
  columns = e.target.value

  let columnsContent = `<span class="cell header">X</span>`
  for (let i = 0; i <= columns; i++) {
    columnsContent += `<span class="cell header">${i}</span>`
  }
  columnsContent += '</br>'
  tableContent += columnsContent

  return [columns, columnsContent]
}

const renderRows = e => {

  const [columns, _] = renderColumns(e)
  const { value: rows } = e.target

  let rowsContent = ''
  for (let i = 0; i <= rows; i++) {
    rowsContent += `<span class="cell header">${i}</span>`
    for (let j = 0; j <= columns; j++) {
      rowsContent += `<span class="cell">${i * j}</span>`
    }
    rowsContent += '</br>'
  }
  tableContent += rowsContent

}

const renderTable = (e) => {
  table.innerHTML = tableContent
  setHeaderColor(e)
}

const setHeaderColor = e => {
  const tableHeaderColor = e.target.value
  const tableHeader = document.querySelectorAll('.header')

  Array.from(tableHeader).forEach(header => {
    header.style.backgroundColor = tableHeaderColor
  })

  color = tableHeaderColor
}

colorElem.addEventListener('change', setHeaderColor)

columnsElem.addEventListener('change', renderColumns)
rowsElem.addEventListener('change', renderRows)
buttonElem.addEventListener('click', renderTable)
