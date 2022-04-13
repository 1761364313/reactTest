import { createContext, useState } from 'react'
import { createContainer } from 'react-tracked'

const useValue = () => useState({
  visible: false,
  refresh: 1,
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
  },
  page: {
    pageIndex: 1,
    pageSize: 10
  },
  searchParams: {
    _id: '',
    name: '',
    tel: '',
    person: '',
    startTime: '',
    endTime: '',
    pageIndex: 1,
    pageSize: 10
  }
})
const { Provider, useTracked } = createContainer(useValue)
export {
  Provider,
  useTracked
}
// state
export const defaultValue = {
  visible: false,
  refresh: 1,
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
  },
  page: {
    pageIndex: 1,
    pageSize: 10
  },
  searchParams: {
    _id: '',
    name: '',
    tel: '',
    person: '',
    startTime: '',
    endTime: '',
    pageIndex: 1,
    pageSize: 10
  }
}

// action
export const reducer = (state, action) => {
  switch (action.type) {
    case 'resetInit':
      return defaultValue
    case 'changeVal':
      if (Array.isArray(action.key)) {
        action.key.forEach((k, i) => {
          state[k] = action.value[i]
        })
      } else {
        state[action.key] = action.value
      }
      return { ...state }
    default:
      return state
  }
}

// context
export const context = createContext()

