import { links } from '../public/json/links.json'

const defaultUrl: string = "https://cdn.mtdv.me/video"

export function setupCounter(element: HTMLButtonElement): void {
  let counter = 0

  const setCounter = (count: number): void => {
    counter = count
    element.innerHTML = `
    Clique aqui e receba uma surpresa aleatória!<br>
    <b>Número de cliques: ${counter}</b>
    `
  }

  element.addEventListener('click', () => {
    setCounter(counter + 1)

    if (counter >= 5) {
      const link = defaultUrl + links[Math.floor(Math.random() * links.length)]

      element.innerHTML = "Preparando a última surpresa..."

      setTimeout(() => {
        open(link, 'window', 'toolbar=no, menubar=no, resizable=no, width=500, height=500, top=100, left=100')
      }, 2000)

      //   'width=795, height=590, top=100, left=699, scrollbars = no, status = no, toolbar = no, location = no, menubar = no, resizable = no,fullscreen = no'
      //   'width=660, height=510, scrollbars=yes'
    }
  })

  setCounter(0)
}
