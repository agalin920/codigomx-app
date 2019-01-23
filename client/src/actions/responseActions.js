import { FETCH_RESPONSES, GET_RESPONSES } from '../constants';

import axios from 'axios';

export const fetchResponses = () => {
    return({
        type: FETCH_RESPONSES,  
    })
 }

export const getResponses = (postId) => {
    console.log('from action', postId);
    return dispatch => {
      dispatch(fetchResponses());
      axios.get(`http://localhost:5000/responses/${postId}`)
      .then(function(response) {
          dispatch({
              type: GET_RESPONSES,
              payload: response.data
          })
      }).catch(function (error){
          console.log(error);
      });
    }
}

export const postResponse = (postId, newResponse) => {
    return dispatch => {
      axios.post(`http://localhost:5000/responses/${postId}`, {response_content: newResponse})
      .then(function() {
        dispatch(getResponses(postId));
      }).catch(function (error){
          console.log(error);
      });
    }
}