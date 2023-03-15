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
import { useSelector } from 'react-redux';


// mui icons
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { makeStyles } from "@mui/styles";
import SearchSelect from "../../components/UI/SearchSelect/SearchSelect";
import PickDate from "../../components/UI/PickDate/PickDate";
import { pink } from "@mui/material/colors";
import { useDispatch } from 'react-redux';
import { updateCreateStoryInputValues } from "../../Actions/Story.Action";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles({
  TextField: {
    color: "white !important",
    height: "30px",
    border: "1px solid #30363d",
    borderRadius: "5px",
    backgroundColor: "black",
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
  const [storyList, setStoryList] = useState([{ story: "" }]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [inputValueStoryName, setInputValueStoryName] = useState('');
  console.log ("data", selectedOption, inputValueStoryName);

  const dataInput = useSelector((state) => state.inputValuesReducer);
  console.log ("dataInput", dataInput);

  

  const handleAddStory = () => {
    setStoryList([...storyList, { story: "" }]);
  };

  const handleRemoveStory = (index) => {
    const list = [...storyList];
    list.splice(index, 1);
    setStoryList(list);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  const handleInputChange = (e) => {
    setInputValueStoryName(e.target.value);
  };

  const handleDataSubmit = (e) => {
    e.preventDefault();
    // Dispatch the updateInputValues action with the input values
    dispatch(updateCreateStoryInputValues(selectedOption, inputValueStoryName));

    // Send data to the database here, including the input values
  }


  return (
    <>
    <Grid className="addStory" container>
      <Grid className="story_wrapper" item xs={12} md={6}>
        <div className="story_heading">
          <Typography sx={{ fontSize: 20 }}>Create a New Story</Typography>
          <div className="sub_heading">
            <Typography className="sub_heading">
              Want to assign tasks to your team? create a new story and assign
              it to your team members and track the progress.
            </Typography>
          </div>
          <Divider sx={{ bgcolor: "#30363c" }} />
          <label className="label">Story Name (Required)</label>
          <TextField
            onChange={handleInputChange}
            value={inputValueStoryName}
            fullWidth
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
                  fullWidth
                  InputProps={{
                    className: classes.TextField,
                  }}
                  id="outlined-size-small"
                  placeholder="Enter sub story"
                  size="small"
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
              fullWidth
              InputProps={{
                className: classes.Textarea,
              }}
              id="outlined-textarea"
              placeholder="Enter acceptance criteria"
              multiline
            />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className="create_story_btn_wrapper">
        <div className="due_date">
          <label className="label">Due Date (Optional)</label>
          <PickDate />
        </div>
        <div>
          <div className="priority_list">
            <label className="label">Set Priority (Required)</label>
            <div className="priority">
              <label className="label"> Urgent </label>
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
                />
              <label className="label"> Critical </label>
              <Checkbox {...label} defaultChecked />
              <label className="label"> Alarming </label>
              <Checkbox {...label} defaultChecked color="secondary" />
              <label className="label"> Low </label>
              <Checkbox {...label} defaultChecked color="success" />
            </div>
          </div>
          <div className="create_story_btn_wrap">
            <button className="create_story_btn" type="submit" onClick={handleDataSubmit}>Create Story</button>
            <button className="cancel_story_btn" onClick={() => {
              window.location.href = "/home"
            }}>close</button>
            </div>
        </div>
      </Grid>
    </Grid>
    {/* {dataInput?.selectedOptionvalue.map ((item, index) => {
      return (
        <div key={index}>
          <p>{item.label}</p>
        </div>
      )
    })} */}

            
            </>

  );
}

export default AddStory;
