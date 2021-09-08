const createAsyncActionType = action => ({
  SUCCESS: `${action}-success`,
  ERROR: `${action}-error`,
  REQUESTED: `${action}-requested`,
})

export const APP_INIT = 'app_init'
export const ORDER = createAsyncActionType('order')
export const RESPONSE = createAsyncActionType('response')
export const GET_FORM = createAsyncActionType('getForm')
