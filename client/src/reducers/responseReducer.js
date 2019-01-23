import { FETCH_RESPONSES, GET_RESPONSES } from '../constants';

const initialState = {
    isFetching:true,
    responses:[]
};

const responseReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_RESPONSES:
            state={
                ...state,
                isFetching:true
            }
            return state;

        case GET_RESPONSES:
            state={
              ...state,
              isFetching:false,
              responses:action.payload
            }
            return state;

        default:
            return state;
    }
}
  
export default responseReducer;