type QueueItem = () => Promise<void>

export default class TypeWriter {
  _queue: QueueItem[] = []
  _element: HTMLElement
  _loop: boolean
  _typingSpeed: number
  _deletingSpeed: number

  _addToQueue(cb: (resolve: () => void) => void) {
    this._queue.push(() => new Promise(cb))
  }

  constructor(parent: HTMLElement, { loop = false, typingSpeed = 50, deletingSpeed = 50, } = {}) {
    this._loop = loop
    this._typingSpeed = typingSpeed
    this._deletingSpeed = deletingSpeed
    this._element = document.createElement('div')

    parent.append(this._element)
  }

  typeString(string: string) {
    this._addToQueue((resolve) => {
      let i: number = 0

      const interval = setInterval(() => {
        this._element.append(string[i])
        i++

        if (i >= string.length) {
          clearInterval(interval)
          resolve()
        }
      }, this._typingSpeed)
    })

    return this
  }

  deleteChars(number: number) {
    this._addToQueue((resolve) => {
      let i: number = 0

      const interval = setInterval(() => {
        this._element.innerText = this._element.innerText.substring(0, this._element.innerText.length - 1)
        i++

        if (i >= number) {
          clearInterval(interval)
          resolve()
        }
      }, this._deletingSpeed)
    })

    return this
  }

  deleteAll(deleteSpeed = this._deletingSpeed) {
    this._addToQueue((resolve) => {
      const interval = setInterval(() => {
        this._element.innerText = this._element.innerText.substring(0, this._element.innerText.length - 1)

        if (this._element.innerText.length === 0) {
          clearInterval(interval)
          resolve()
        }
      }, deleteSpeed)
    })

    return this
  }

  pauseFor(duration: number) {
    this._addToQueue((resolve) => {
      setTimeout(resolve, duration)
    })

    return this
  }

  async start() {
    let cb = this._queue.shift()

    while (cb != null) {
      await cb()

      if (this._loop) this._queue.push(cb)

      cb = this._queue.shift()
    }

    return this
  }
}