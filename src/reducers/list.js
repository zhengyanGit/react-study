function list (state = {
  loading: true,
  data: []
}, action) {
  switch (action.type) {
    case "LIST_UPDATA_SUCC":
      console.log('1212', action.data)
      return {
        loading: false,
        data: action.data
      }
    default:
      return state;
  }
}
export default list;