export const currentState = (state) => {
  return state.status
}

export const username = (state) => {
  console.log(state)
  return state.user.name || ''
}