import { resolve } from 'path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        page: resolve(__dirname, './page.html')
      }
    }
  }
}
