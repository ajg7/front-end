import { FETCH_STUDENTS_START,FETCH_STUDENTS_SUCCESS } from '../actions'
const initalState = {
  students: [],
  isLoading: true,
  error: ''
}

export const professorReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_STUDENTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        students: action.payload,
        isLoading: false,
      }
      
      
    default:
      return state
  }
}
