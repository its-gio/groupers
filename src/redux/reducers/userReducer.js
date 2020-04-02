import axios from 'axios';

const initialState = {
  loading: false
}

// Actions
const POST_REGISTER = "POST_REGISTER";
const POST_LOGIN = "POST_LOGIN";

// Export Functions
export function postRegister(register) {
  const data = axios.post('/auth/register', {...register});
  return { type: POST_REGISTER, payload: data };
}

export function postLogin(login) {
  const data = axios.post('/auth/login', {...login});
  return { type: POST_LOGIN, payload: data };
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

    default: return state;
  }
}