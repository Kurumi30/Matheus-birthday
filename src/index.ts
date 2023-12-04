export function setupCounter(element: HTMLButtonElement): void {
  let counter = 0
  const setCounter = (count: number): void => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => {
    setCounter(counter + 1)

    if (counter >= 10) {
      location.href = "https://r.mtdv.me/aniversario-matheus" // colocar a trollagem

      element.innerHTML = "Preparando a surpresa..."
    }
  })
  setCounter(0)
}
