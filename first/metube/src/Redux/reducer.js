import * as types from "./actionTypes";
const initialState = {
  search:"News",
  videos:[],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_SEARCH_SUCCESS:
      return {
        ...state,
        search:payload,
        isLoading: true,
        isError: false,
      };
    case types.GET_SEARCH_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
      case types.GET_VIDEO_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.GET_VIDEO_SUCCESS:
        return {
          ...state,
          videos:payload,
          isLoading: true,
          isError: false,
        };
      case types.GET_VIDEO_FAILURE:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
    default:
        return {
            ...state
        };
  }
}