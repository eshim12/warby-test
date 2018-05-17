import { adapter } from '../services'

export const fetchUsers = () => dispatch => {
  dispatch({type: 'ASYNC_START'});
  adapter.users.getUsers()
    .then(users => {
      console.log("all users", users);
      dispatch({
        type: 'GET_ALL_USERS', users
      })
    })
}

export const fetchGlasses = () => dispatch => {
  dispatch({type: 'ASYNC_START'});
  adapter.glasses.getGlasses()
    .then(glasses => {
      console.log("all glasses", glasses);
      dispatch({
        type: 'GET_ALL_GLASSES', glasses
      })
    })
}
