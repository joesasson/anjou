export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    payload: name
  }
}

export const setPairs = (pairs) => {
  return {
    type: 'SET_PAIRS',
    payload: pairs
  }
}
