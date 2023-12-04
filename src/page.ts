import TypeWriter from './Typewriter'

const title = document.querySelector('.card-title') as HTMLElement

const typewriter = new TypeWriter(title, { loop: false, typingSpeed: 100 })

typewriter
  .pauseFor(2300)
  .typeString("Feliz Aniversário!")
  .start()
