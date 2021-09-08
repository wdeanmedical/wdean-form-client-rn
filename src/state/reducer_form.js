import { GET_FORM } from './action_types'
import * as Constants from '../constants/constants'
import * as Components from '../components'

const reviver = (key, value) => {
  if (typeof value === 'string' && value.startsWith('constants.')) {
    const constantKey = value.substring('constants.'.length)
    return Constants[constantKey]
  }
  if (key === 'FormComponent') {
    return Components[value]
  }
  if (value === 'undefined') {
    return undefined
  }
  return value
}

const deserialize = json => {
  const parsed = JSON.parse(JSON.stringify(json), reviver)
  console.log('parsed', parsed)
  return parsed
}

const INITIAL_STATE = {
  form: null,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_FORM.SUCCESS:
      return {
        ...state,
        form: deserialize(action.payload),
      }
    default:
      return state
  }
}
