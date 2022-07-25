import { computed } from "vue"
import { useStore } from "vuex"


const useAuth = () => {

  const store = useStore()

  const createAuth = async(user) => {
    try {
      const resp = await store.dispatch('auth/createUser', user)
      return resp
    } catch (error) {
      console.log('hola')

    }

  }

  const loginUser = async(user) => {
    try {
      const resp = await store.dispatch('auth/signInUser', user)
      return resp
    } catch (error) {
      console.log('hola')

    }
  }

  const checkStatus = async() => {
    const resp = await store.dispatch('auth/checkAuthentication')
    return resp
  }

  const logout = () => {
    store.commit('auth/logout')
    store.commit('auth/clearEntry')
  }

  return {
    createAuth,
    loginUser,
    checkStatus,
    logout,

    authStatus: computed(()=>store.getters['auth/currentState']),
    username: computed(()=>store.getters['auth/username'])
  }
}

export default useAuth