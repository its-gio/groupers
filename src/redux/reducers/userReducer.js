import axios from 'axios';

const initialState = {
  loading: false
}

// Actions
const POST_REGISTER = "POST_REGISTER";

// Export Functions
export function postRegister() {
  const data = axios.post('/auth/register', );
  return { type: POST_REGISTER, payload: data };
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

    default: return state;
  }
}