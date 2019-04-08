import { ActionTypes, OfferActions } from './actions';
import { initialState, State } from './state';

export function offerReducer(state = initialState, action: OfferActions): State {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      return {
        ...state,
        offeredInstructorIds: action.payload.offeredInstructorIds,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: 'action.payload.error'
      };
    }
    case ActionTypes.ADD_OFFER: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.ADD_OFFER_SUCCESS: {
      return {
        ...state,
        offeredInstructorIds: [...state.offeredInstructorIds, action.payload.offeredInstructorId],
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.ADD_OFFER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: 'action.payload.error.addoffer'
      };
    }
    default: {
      return state;
    }
  }
}
