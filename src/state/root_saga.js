import { spawn, all } from 'redux-saga/effects'
import { watchGetForm, watchSendOrder, watchSendResponse } from './app_sagas'

const rootSaga = function*() {
  yield all([
    spawn(watchSendOrder),
    spawn(watchSendResponse),
    spawn(watchGetForm),
  ])
}

export default rootSaga
