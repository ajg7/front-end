import { 
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  SORT_STUDENTS,
} from '../actions'

const initalState = {
  students: [],
  isLoading: true,
  error: '',
  currentStudent:[]
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
    case SORT_STUDENTS:
      return{
        ...state,
        currentStudent: state.students.filter( student => student.id == action.payload)
      }
    default:
      return state
  }
}
