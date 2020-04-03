import axios from 'axios';

const initialState = {
  loading: false
}

// Actions
const POST_REGISTER = "POST_REGISTER";
const POST_LOGIN = "POST_LOGIN";
const GET_LOGOUT = "GET_LOGOUT";
const GET_SESSION = "GET_SESSION";

// Export Functions
export function postRegister(register) {
  const data = axios.post('/auth/register', {...register});
  return { type: POST_REGISTER, payload: data };
}

export function postLogin(login) {
  const data = axios.post('/auth/login', {...login});
  return { type: POST_LOGIN, payload: data };
}

export function getLogout() {
  const data = axios.get('/auth/logout');
  return { type: GET_LOGOUT, payload: data };
}

export function getSession() {
  const data = axios.get('/auth/session');
  return { type: GET_SESSION, payload: data };
}

// Reducer
export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case `${POST_REGISTER}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${POST_REGISTER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        fullname: payload.data.fullname,
        profile_pic: payload.data.profile_pic,
        email: payload.data.email,
        loading: false
      }

    case `${POST_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${POST_LOGIN}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        fullname: payload.data.fullname,
        profile_pic: payload.data.profile_pic,
        email: payload.data.email,
        loading: false
      }

    case `${GET_LOGOUT}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_LOGOUT}_FULFILLED`:
      return {
        ...state,
        user_id: null,
        fullname: null,
        profile_pic: null,
        email: null,
        loading: false
      }

    case `${GET_SESSION}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_SESSION}_REJECTED`:
      return {
        ...state,
        loading: false
      }
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        fullname: payload.data.fullname,
        profile_pic: payload.data.profile_pic,
        email: payload.data.email,
        loading: false
      }

    default: return state;
  }
}