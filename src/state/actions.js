import { ORDER, RESPONSE, GET_FORM } from './action_types'

export const sendOrder = order => {
  return {
    type: ORDER.REQUESTED,
    payload: {
      order,
    },
  }
}

export const sendResponse = response => {
  return {
    type: RESPONSE.REQUESTED,
    payload: {
      response,
    },
  }
}

export const sendOrderSuccess = payload => ({
  type: ORDER.SUCCESS,
  payload,
})

export const getForm = () => {
  console.log('IN getForm()')
  return {
    type: GET_FORM.REQUESTED,
    payload: {},
  }
}

export const getFormSuccess = payload => ({
  type: GET_FORM.SUCCESS,
  payload,
})

export const getFormFail = error => ({
  type: GET_FORM.ERROR,
  error,
})

export const sendResponseSuccess = payload => ({
  type: RESPONSE.SUCCESS,
  payload,
})
