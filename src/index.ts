import { links } from '../public/json/links.json'

export function setupCounter(element: HTMLButtonElement): void {
  let counter = 0
  const setCounter = (count: number): void => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => {
    setCounter(counter + 1)

    if (counter >= 10) {
      location.href = links[Math.floor(Math.random() * links.length)]

      element.innerHTML = "Preparando a última surpresa..."
    }
  })
  setCounter(0)
}
