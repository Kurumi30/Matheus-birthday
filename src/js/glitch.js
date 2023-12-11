
const title = document.title

const createNotification = () => {
  // Verifique se o navegador suporta notificações
  // if (!("Notification" in window)) {
  //   alert("Este navegador não suporta notificações de sistema")

  //   return
  // }

  if (Notification && Notification.permission !== "denied") {
    if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const notify = new Notification("PARABÉNS🎊", {
            body: "Espero que tenha gostado da surpresa!",
            icon: "../../public/svg/vite.svg",
            vibrate: [200, 100, 200, 100, 200, 100, 200],
          })

          notify.onclick = (event) => {
            event.preventDefault()

            open(document.location.href)

            notify.close()
          }
        }
      })
    }

    return
  }
}

document.addEventListener('visibilitychange', () => {
  // if (document.visibilityState == 'hidden') title = "Volte aqui!"
  if (document.hidden) {
    document.title = "Volte aqui!"

    createNotification()
  } else {
    document.title = title
  }
})
