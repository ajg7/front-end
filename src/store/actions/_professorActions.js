
import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const FETCH_STUDENTS_START = 'FETCH_STUDENTS_START'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS'
export const fetchStudents = (props) => (dispatch) => {
  dispatch({type: FETCH_STUDENTS_START})
  console.log(props);
  axiosWithAuth()
    .get(`/professor/${props}/students`)
    .then(res => {
      dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: res.data.data})
      console.log(res);
    })
    .catch(err => console.log(err))
}

export const SORT_STUDENTS = 'SORT_STUDENTS'
export const sortStudents = (props) => (dispatch) => {
  console.log(props)
  dispatch({type: SORT_STUDENTS, payload: props})
}



