import { FETCH_POSTS, GET_POSTS } from '../constants';

import axios from 'axios';

export const fetchPosts = () => {
    return({
        type: FETCH_POSTS,  
    })
 }

export const getPosts = () => {
    return dispatch => {
      dispatch(fetchPosts());
      axios.get('http://localhost:5000/posts')
      .then(function(response) {
          dispatch({
              type: GET_POSTS,
              payload: response.data
          })
      }).catch(function (error){
          console.log(error);
      });
    }
}

export const postPost = (newPost) => {
    return dispatch => {
      axios.post('http://localhost:5000/posts', {post_content: newPost})
      .then(function() {
        dispatch(getPosts());
      }).catch(function (error){
          console.log(error);
      });
    }
}