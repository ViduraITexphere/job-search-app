import {
  Checkbox,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./AddStory.css";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import SearchSelect from "../../components/UI/SearchSelect/SearchSelect";
import PickDate from "../../components/UI/PickDate/PickDate";
import { pink } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { postStory } from "../../Actions/Story.Action";
import axios from "axios";

// mui icons
import AddCircleIcon from "@mui/icons-material/AddCircle";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles({
  TextField: {
    color: "white !important",
    height: "30px",
    border: "1px solid #30363d",
    borderRadius: "5px",
    backgroundColor: "black !important",
    fontSize: "12px !important",
    width: "100%",
  },
  Textarea: {
    color: "white !important",
    border: "1px solid #30363d",
    borderRadius: "5px",
    backgroundColor: "black",
    fontSize: "12px !important",
    width: "100%",
  },
});

function AddStory() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [assignees, setAssignees] = useState([]);
  const [StoryTitle, setStoryTitle] = useState("");
  const [storyList, setStoryList] = useState([{ subStory: "" }]);
  const [criteria, setCriteria] = useState("");
  // const [dueDate, setDueDate] = useState(new Date());

  const dataInput = useSelector((state) => state.storyReducer);
  // console.log("dataInput", dataInput);

  //////////////// SUB STORY INPUT //////////////////////////////
  const handleAddStory = () => {
    setStoryList([...storyList, { subStory: "" }]);
  };

  const handleSubStoryChange = (e, index) => {
    const { value } = e.target;
    const list = [...storyList];
    list[index].subStory = value;
    setStoryList(list);
  };

  // remove sub story
  const handleRemoveStory = (index) => {
    const list = [...storyList];
    list.splice(index, 1);
    setStoryList(list);
  };
  /////////////////////////////////////////////////////////////

  /////////////////// assignee input////////////////////////////
  const handleSelectChange = (selectedOption) => {
    setAssignees(selectedOption);
  }; /////////////////////////////////////////////////////////////

  //////////////// story title input////////////////////////////
  const handleInputChange = (e) => {
    setStoryTitle(e.target.value);
  }; /////////////////////////////////////////////////////////////

  //////////////// criteria input////////////////////////////
  const handleInputCriteria = (e) => {
    setCriteria(e.target.value);
  }; /////////////////////////////////////////////////////////////

  //////////////// due date input////////////////////////////
  // const handleDueDateSubmit = (date) => {
  //   setDueDate(date);
  // }; /////////////////////////////////////////////////////////////

  //////////////// handle submit- seve data on REDUX-///////////////////
  const handleDataSubmit = async (e) => {
    e.preventDefault();

    const data = {
      storyTitle: StoryTitle,
      subStory: storyList.map(({ subStory }) => subStory),
      assignees: assignees,
      criteria: criteria,
    };

    fetch("http://localhost:5000/story/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          console.log("RESPONSE GETTING SUCCESSFULLY!")
          return res.json(); // parse the response data as JSON
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((res) => {
        //send data to redux
        console.log("res", res.data);
        dispatch(postStory(res.data));
      })
      .catch((error) => {
        console.error("Error while adding story:", error);
        alert("An error occurred while adding the story");
      });
  };

  /////////////////////////////////////////////////////////////

  return (
    <>
      <Grid className="addStory" container>
        <Grid className="story_wrapper" item xs={12} md={12}>
          <div className="story_heading">
            <Typography sx={{ fontSize: 20 }}>Create a New Story</Typography>
            <div className="sub_heading">
              <Typography className="sub_heading">
                Want to assign tasks to your team? create a new story and assign
                it to your team members and track the progress.
              </Typography>
            </div>
            <Divider sx={{ bgcolor: "#30363c", mb: 5 }} />
            <label className="label">Story Name (Required)</label>
            <TextField
              onChange={handleInputChange}
              value={StoryTitle}
              fullWidth
              autoComplete="off"
              InputProps={{
                className: classes.TextField,
              }}
              id="outlined-size-small"
              placeholder="Enter main story"
              size="small"
            />
            <label className="label">
              Sub Story (You can add multiple stories)
            </label>
            {storyList.map((story, index) => (
              <Grid key={index} className="subStory">
                <Grid className="subStory_left">
                  <TextField
                    value={story.subStory}
                    onChange={(e) => handleSubStoryChange(e, index)}
                    fullWidth
                    InputProps={{
                      className: classes.TextField,
                    }}
                    id="outlined-size-small"
                    placeholder="Enter sub story"
                    autoComplete="off"
                    size="small"
                    name="subStory"
                  />
                  {storyList.length - 1 === index && storyList.length < 10 && (
                    <IconButton
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAddStory}
                    >
                      <AddCircleIcon sx={{ color: "white" }} />
                    </IconButton>
                  )}
                </Grid>
                <div className="subStory_right">
                  {storyList.length > 1 && (
                    <button
                      className="removeBtn"
                      type="button"
                      onClick={() => handleRemoveStory(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </Grid>
            ))}
            <div className="add_participants">
              <label className="label">Add people</label>
              <SearchSelect onSelectChange={handleSelectChange} />
            </div>
            <div className="acceptance_criteria">
              <label className="label">Acceptance Criteria (Optional)</label>
              <TextField
                onChange={handleInputCriteria}
                value={criteria}
                fullWidth
                InputProps={{
                  className: classes.Textarea,
                }}
                id="outlined-textarea"
                placeholder="Enter acceptance criteria"
                multiline
              />
            </div>
            <div className="create_story_btn_wrap">
              <button
                style={
                  StoryTitle && assignees.length > 0 && storyList
                    ? { opacity: 1 }
                    : { opacity: 0.5 }
                }
                disabled={!StoryTitle && storyList.length == 1}
                className="create_story_btn"
                type="submit"
                onClick={handleDataSubmit}
              >
                Create story
              </button>
              <button
                className="cancel_story_btn"
                onClick={() => {
                  window.location.href = "/home";
                }}
              >
                close
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default AddStory;
