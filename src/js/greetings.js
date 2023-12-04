const jsConfetti = new JSConfetti()

const confetti = async () => {
  await jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '🔥'],
    emojiSize: 100,
    //confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
    confettiRadius: 10,
    confettiNumber: 50,
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

    button.addEventListener('click', confetti)
  } catch (err) {
    console.error(err)
  }
}

  // let context = new AudioContext()

  // console.log(context.state)

  // context.onstatechange = () => {
  //   console.log(context.state)

  //   if (context.state === 'running') {
  //     fetch('../../audio/birthday.wav')
  //       .then(response => response.arrayBuffer())
  //       .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  //       .then(audioBuffer => {
  //         let source = context.createBufferSource()
  //         source.buffer = audioBuffer;
  //         source.connect(context.destination)
  //         source.start()
  //       })
  //       .catch(e => console.error(e))
  //   }
  // }
