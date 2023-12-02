const jsConfetti = new JSConfetti()

// const confetti = () => {
//   let button = document.querySelector('.btn')

//   button.addEventListener('click', async () => {
//     await jsConfetti.addConfetti({
//       emojis: ['🌈', '⚡️', '💥', '✨', '🔥'],
//       emojiSize: 100,
//       confettiRadius: 10,
//       confettiNumber: 50,
//     })
//   })
// }

// confetti()

const confetti = () => {
  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '🔥'],
    emojiSize: 100,
    //confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
    confettiRadius: 10,
    confettiNumber: 50,
  })
}

window.onload = confetti