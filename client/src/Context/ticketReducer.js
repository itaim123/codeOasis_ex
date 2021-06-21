import { TYPES } from './types';

export default (state, action) => {
    switch(action.type){
        case TYPES.INC_PAGE:
            console.log('reducer inc')
            return {
                ...state,
                page: state.page + 1 
            }
        case TYPES.DEC_PAGE:
            return {
                ...state,
                page: state.page - 1 
            }
        case TYPES.SET_TICKETS:
            return {
                ...state,
                tickets: action.payload
            }
        case TYPES.PAGE_DEFAULT:
            return {
                ...state,
                page: 1
            }
        default:
            return state
    }
}