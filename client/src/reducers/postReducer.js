import { FETCH_POSTS, GET_POSTS } from '../constants';

const initialState = {
    isFetching:true,
    posts:[]
};

const postReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_POSTS:
            state={
                ...state,
                isFetching:true
            }
            return state;

        case GET_POSTS:
            state={
              ...state,
              isFetching:false,
              posts:action.payload
            }
            return state;

        default:
            return state;
    }
}
  
export default postReducer;