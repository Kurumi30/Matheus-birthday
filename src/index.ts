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
      // location.href = link

      element.innerHTML = "Preparando a última surpresa..."

      open(link, 'window', 'toolbar=no, menubar=no, resizable=no, width=500, height=500, top=100, left=100')
      
      //   'width=795, height=590, top=100, left=699, scrollbars = no, status = no, toolbar = no, location = no, menubar = no, resizable = no,fullscreen = no'
      //   'width=660, height=510, scrollbars=yes'
    }
  })

  setCounter(0)
}
