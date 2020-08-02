export default {
  getTheme: () => {
    return window.localStorage.getItem('theme')
  },
  saveTheme: (data) => {
    return window.localStorage.setItem('precios', JSON.stringify(data))
  }
}
