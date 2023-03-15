import { UPDATE_CREATE_STORY_INPUT_VALUES } from "../Actions/Story.Action";
const initialState = {
    selectedOptionvalue: [],
    inputValueStoryName: "",
  };
  
  const inputValuesReducer = (state = initialState, action) => {
    console.log ("reducer", action.payload);
    switch (action.type) {
      case UPDATE_CREATE_STORY_INPUT_VALUES:
        return {
          ...state,
            selectedOptionvalue: action.payload.selectedOption,
            inputValueStoryName: action.payload.inputValueStoryName,
        };
      default:
        return state;
    }
  };
  
  export default inputValuesReducer;
  