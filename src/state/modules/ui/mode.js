import api from 'utils/api'

const REQUEST_SAVING_THEME = 'REQUEST_SAVING_THEME'
const RECEIVE_SAVING_THEME = 'RECEIVE_SAVING_THEME'
const REQUEST_THEME = 'REQUEST_THEME'
const RECEIVE_THEME = 'RECEIVE_THEME'

const initialState = {
  loading: false,
  saving: false,
  mode: window.localStorage.getItem('themeMode') || 'light'
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_THEME:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_THEME:
      return {
        ...state,
        loading: false,
        mode: action.mode
      }
    case REQUEST_SAVING_THEME:
      return {
        ...state,
        saving: true
      }
    case RECEIVE_SAVING_THEME:
      return {
        ...state,
        saving: false,
        mode: action.mode
      }
    default:
      return state
  }
}

export function changeTheme (mode) {
  return async (dispatch) => {
    if (mode) {
      dispatch({ type: REQUEST_SAVING_THEME })
      window.localStorage.setItem('themeMode', mode)
      dispatch({ type: RECEIVE_SAVING_THEME, mode })

      const response = await api.saveTheme({ modo: mode })
      if (response && response.data) {
        window.localStorage.setItem('themeMode', mode)
      }
    }
  }
}
