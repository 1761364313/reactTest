import { createContext } from 'react'

// state
export const defaultValue = {
  visible: false,
  getCount: 11,
  loading: false,
  list: null,
  modalType: 'add',
  formDefault: {
    name: '',
    price: '',
    priceAll: '',
    tel: '',
    person: ''
  }
}

// action
export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeVisible':
      return { ...state, visible: action.payload }
    case 'changeType':
      return { ...state, modalType: action.payload }
    case 'getList':
      return { ...state, list: action.payload }
    case 'changeForm':
      return { ...state, formDefault: action.payload }
    case 'loadingStart':
      return { ...state, loading: true }
    case 'loadingEnd':
      return { ...state, loading: false }
    default:
      return state
  }
}

// context
export const context = createContext()

