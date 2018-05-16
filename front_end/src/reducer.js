import {combineReducers} from 'redux';

const initialState = {currentUser: {}};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, username } = action.user;
      return { ...state, currentUser: { id, username } };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    case 'LOGIN_ERROR':
    // debugger
      return { ...state, currentUser: {}, login_error: action.error };
    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      console.log("getting the action");
      return action.users
    default:
      console.log("not returning correct state?", action);
      return state

  }
}

const rootReducer = combineReducers({
  authz: authReducer,
  users: usersReducer
});

export default rootReducer
