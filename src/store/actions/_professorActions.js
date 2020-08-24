
import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const FETCH_STUDENTS_START = 'FETCH_STUDENTS_START'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS'
export const fetchStudents = () => (dispatch) => {
  dispatch({type: FETCH_STUDENTS_START})
  axiosWithAuth()
    .get('/users')
    .then(res => {
      dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: res.data.data})
      console.log(res);
    })
    .catch(err => console.log(err))
}



