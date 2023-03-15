export const UPDATE_CREATE_STORY_INPUT_VALUES = 'UPDATE_CREATE_STORY_INPUT_VALUES';
export const updateCreateStoryInputValues = (selectedOption, inputValueStoryName) => {
    console.log ("action-people", selectedOption);
    console.log ("action-story-name", inputValueStoryName );
    return {
      type: UPDATE_CREATE_STORY_INPUT_VALUES,
      payload: {
        selectedOption,
        inputValueStoryName,
      },
    };
  };
  