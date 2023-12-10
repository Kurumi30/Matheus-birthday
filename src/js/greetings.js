const jsConfetti = new JSConfetti()

const confetti = async () => {
  await jsConfetti.addConfetti({
    emojis: ['🥳', '🎉', '🎊', '🎁', '🎈', '🤩', '🎂', '🧁', '🥂', '🍭'],
    emojiSize: 90,
    confettiRadius: 10,
    confettiNumber: 45,
  })
}

const song = new Audio('../../audio/birthday.wav')

song.load()

window.onload = () => {
  try {
    Promise.all([
      new Promise(async (resolve) => {
        await confetti()
        resolve()
      }),
      new Promise(async (resolve) => {
        await song.play()
        resolve()
      })
    ])

    const button = document.getElementById("confetti-button")

    button.addEventListener('click', () => {
      const canVibrate =
        navigator.vibrate ||
        navigator?.webkitVibrate ||
        navigator?.mozVibrate ||
        navigator?.msVibrate

      if (canVibrate) navigator.vibrate(100)

      confetti()
    })
  } catch (err) {
    console.error(err)
  }
}
