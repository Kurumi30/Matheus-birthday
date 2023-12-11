import './css/page.css'
import { setupCounter } from '.'
// import typescriptLogo from '/svg/typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>E chegamos até o fim😪</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Do seu primeiro e eterno "<b>fã</b>", Fernando <span class="heart">❤</span>
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
