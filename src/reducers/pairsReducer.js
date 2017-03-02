export default function pairsReducer(state=[], action){
  switch (action.type) {
    case 'SET_PAIRS':
      return action.payload
    default:
      return state
  }
}
