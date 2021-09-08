import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window').height
export const SCREEN_HEIGHT = height

const { width } = Dimensions.get('window').width
export const SCREEN_WIDTH = width

export const BROWSER = 'browser'
export const MOBILE = 'mobile'
export const ENABLED = 'enabled'
export const DISABLED = 'disabled'

// Platform Types
export const IOS = 'ios'
export const ANDROID = 'android'

export const ACCEPT = 'accept'
export const REJECT = 'reject'

export const API_URL = 'http://192.168.86.122:3000/api'
