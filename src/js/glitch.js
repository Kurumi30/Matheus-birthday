
const title = document.title

const createNotification = () => {
  // // Verifique se o navegador suporta notificações
  // if (!("Notification" in window)) {
  //   alert("Este navegador não suporta notificações de sistema")

  //   return
  // } else if (Notification.permission === "granted") {
  //   // Se a permissão já foi concedida
  //   new Notification("Olá! Esta é uma notificação.", {
  //     body: "Este é o corpo da notificação",
  //     icon: "../../public/svg/vite.svg",
  //     vibrate: [200, 100, 200, 100, 200, 100, 200],
  //   })

  //   return
  // } else if (Notification.permission !== "denied") {
  //   // Caso contrário, precisamos perguntar ao usuário para permissão
  //   Notification
  //     .requestPermission()
  //     .then(permission => {
  //       // Se o usuário aceitar, vamos criar uma notificação
  //       if (permission === "granted") {
  //         new Notification("Olá! Esta é uma notificação.", {
  //           body: "Mensagem para trazer o amiguinho de volta",
  //           icon: "../../public/svg/vite.svg",
  //           vibrate: [200, 100, 200, 100, 200, 100, 200],
  //         })
  //       }

  //       return
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })

  //   return
  // }

  if (Notification && Notification.permission !== "denied") {
    Notification
      .requestPermission((status) => {
        const notify = new Notification("Este é o título da notificação", {
          body: "Este é o corpo da notificação",
          icon: "../../public/svg/vite.svg",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
        })

        notify.onclick = (event) => {
          event.preventDefault()

          open(document.location.href)

          notify.close()
        }
      })

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
