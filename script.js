const gridSliderSelector = document.querySelector('#sizeSelector');
const createGridButton = document.querySelector('#createGrid');
const gridSliderValue = document.querySelector('.gridSizeNumber');
const gridContainer = document.querySelector('.grid')
const colorPicker = document.querySelector('#colorPicker');
const colorIndicator = document.querySelector('#colorIndicator');

gridSliderSelector.addEventListener('mousemove', () => {
  gridSliderValue.innerHTML = gridSliderSelector.value + ' x ' + gridSliderSelector.value;
});

createGridButton.addEventListener('click', () => {
  updateGrid(gridSliderSelector.value);
});

const gridElem = document.createElement('div')
gridElem.classList.add('grid-cell');
const gridRow = document.createElement('div')
gridRow.classList.add('grid-row');



const updateGrid = (gridSize) => {
  gridSliderValue.innerHTML = gridSize + ' x ' + gridSize;
  gridContainer.innerHTML = '';
  for (let i = 0; i < gridSize; i++) {
    gridContainer.insertAdjacentElement('beforeend', gridRow.cloneNode());
    for (let j = 0; j < gridSize; j++) {
      let gridRow = document.querySelector('.grid-row:last-child');
      gridRow.insertAdjacentElement('beforeend', gridElem.cloneNode());
    }
  }
  let gridCells = document.querySelectorAll('.grid-cell');
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', (e) => {
      if (e.buttons == 1) {
        gridCell.style.backgroundColor = colorPicker.value;

      }
    });
  });
};


colorPicker.addEventListener('change', () => {
  colorIndicator.innerHTML = colorPicker.value.toUpperCase()
  if (colorPicker.value.slice(1) < '303030') {
    colorIndicator.style.backgroundColor = 'white';
  }
  else {
    colorIndicator.style.backgroundColor = colorPicker.value;
  }
});

updateGrid(16);