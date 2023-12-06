import { links } from '../public/json/links.json'

const defaultUrl: string = "https://cdn.mtdv.me/video"

export function setupCounter(element: HTMLButtonElement): void {
  let counter = 0

  const setCounter = (count: number): void => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

  element.addEventListener('click', () => {
    setCounter(counter + 1)

    if (counter >= 10) {
      const link = defaultUrl + links[Math.floor(Math.random() * links.length)]

      location.href = link

      element.innerHTML = "Preparando a última surpresa..."
    }
  })

  setCounter(0)
}
