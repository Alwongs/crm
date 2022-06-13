import { createStore } from 'vuex'
import auth from './auth'
import info from './modules/info'

export default createStore({
  modules: {
    auth,
    info
  }
})
