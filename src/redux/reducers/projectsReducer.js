import axios from 'axios';

const initialState = {
  status: null
}

// Actions
const GET_PROJECTS = "GET_PROJECTS";
const POST_PROJECTS = "POST_PROJECTS";
const POST_FUNDS = "POST_FUNDS";
const CLEAR_STATUS = "CLEAR_STATUS";

// Export Functions
export function getProjects(project_id) {
  let data;

  if (project_id) {
    data = axios.get(`/api/project?project_id=${project_id}`);
  } else {
    data = axios.get('/api/project');
  }
  return { type: GET_PROJECTS, payload: data };
}

export function postProjects(formData) {
  const data = axios.post('/api/project', {...formData});
  return { type: POST_PROJECTS, payload: data };
}

export function postFunds(id, amount) {
  const data = axios.post('/api/fund', { id, amount });
  return { type: POST_FUNDS, payload: data };
}

export function postFormUnmount() {  
  return { type: CLEAR_STATUS };
}

// Reducer
export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case `${GET_PROJECTS}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_PROJECTS}_FULFILLED`:
      return {
        ...state,
        projects: payload.data,
        loading: false
      }
      
    case `${POST_PROJECTS}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${POST_PROJECTS}_FULFILLED`:
      return {
        ...state,
        projects: payload.data,
        loading: false
      }
      
    case `${POST_FUNDS}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${POST_FUNDS}_FULFILLED`:
      console.log(payload.data);
      return {
        ...state,
        status: payload.data.status,
        loading: false
      }

    case `${CLEAR_STATUS}`:
      return {
        ...state,
        status: null,
        loading: false
      }

    default: return state;
  }
}