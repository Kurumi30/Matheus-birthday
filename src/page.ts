import TypeWriter from './Typewriter'

const title = document.querySelector('.card-title') as HTMLElement

const typewriter = new TypeWriter(title, { loop: false, typingSpeed: 100 })
const phrase: string = "AMIGO QUE É AMIGO NÃO DEIXA ANIVERSÁRIO PASSAR EM BRANCO. E COMO HOJE É O SEU, EU NÃO POSSO TE DEIXAR NA MÃO!"

typewriter
  .pauseFor(2300)
  .typeString(phrase)
  .start()
