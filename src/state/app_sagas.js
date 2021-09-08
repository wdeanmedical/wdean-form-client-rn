import { put, call, takeLatest } from 'redux-saga/effects'
import {
  getFormSuccess,
  getFormFail,
  sendOrderSuccess,
  sendResponseSuccess,
} from './actions'
import { ORDER, GET_FORM, RESPONSE } from './action_types'
import API from './api'

export const sendOrder = function*(action) {
  yield put(sendOrderSuccess(action.payload))
}

export const sendResponse = function*(action) {
  yield put(sendResponseSuccess(action.payload))
}

export const watchSendOrder = function*() {
  yield takeLatest(ORDER.REQUESTED, sendOrder)
}

export const watchSendResponse = function*() {
  yield takeLatest(RESPONSE.REQUESTED, sendResponse)
}

export const getForm = function*() {
  console.log('IN SAGA getForm()')
  try {
    const result = yield call(API.getForm)
    console.log('RESULT', result)
    yield put(getFormSuccess(result))
  } catch (error) {
    console.log('ERROR', error)
    yield put(getFormFail(error))
  }
}

export const watchGetForm = function*() {
  yield takeLatest(GET_FORM.REQUESTED, getForm)
}
