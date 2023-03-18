export const CREATE_STORY = 'CREATE_STORY';

export const postStory = (data) => {
  // console.log("actionFile", data);

    return {
      type: CREATE_STORY,
      payload: data
    };
  };

