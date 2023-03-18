import { CREATE_STORY } from "../Actions/Story.Action";

const initialState = {
  data: [],
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STORY:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default storyReducer;
