let dropdown = document.getElementById('droplist10')
optionPrev = 'null'

function combo(value) {
  if (dropdown.options[dropdown.selectedIndex].value != 1) {
    let option = dropdown.options[dropdown.selectedIndex].value
    if (optionPrev != 'null') {
      let optionHide = document.getElementById(optionPrev)
      optionHide.classList.toggle('hidden')
    }
    let optionShow = document.getElementById(option)
    optionShow.classList.toggle('hidden')
    optionPrev = option
  }
}
dropdown.onchange = combo