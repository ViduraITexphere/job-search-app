import { Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./AddStory.css";

// mui icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { makeStyles } from "@mui/styles";
import SearchSelect from "../../components/UI/SearchSelect/SearchSelect";

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
});

function AddStory() {
  const classes = useStyles();
  const [storyList, setStoryList] = useState([{ story: "" }]);

  const handleAddStory = () => {
    setStoryList([...storyList, { story: "" }]);
  };

  const handleRemoveStory = (index) => {
    const list = [...storyList];
    list.splice(index, 1);
    setStoryList(list);
  };



  return (
    <div className="addStory">
      <Grid className="story_wrapper">
        <div className="story_heading">
          <Typography sx={{ fontSize: 20 }}>Create a New Story</Typography>
          <div className="sub_heading">
            <Typography className="sub_heading">
              Want to assign tasks to your team? create a new story and assign it to your team members and track the progress.
            </Typography>
          </div>
          <Divider sx={{ bgcolor: "#30363c" }} />
          <label className="label">Story Name (Required)</label>
          <TextField
            fullWidth
            InputProps={{
              className: classes.TextField,
            }}
            id="outlined-size-small"
            placeholder="Enter main story"
            size="small"
          />
              <label className="label">Sub Story (You can add multiple stories)</label>
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
                {storyList.length -1 === index && storyList.length < 10 && (
                  <IconButton type="button" className="btn btn-primary" onClick={handleAddStory}>
                    <AddCircleIcon sx={{color:'white'}}/>
                  </IconButton>
                )}
              </Grid>
              <div className="subStory_right">
                {storyList.length > 1 && 
                  <button className="removeBtn" type="button" onClick={() => handleRemoveStory(index)}>Remove
                </button>
                }
              </div>
            </Grid>
          ))}
        <div className="add_participants">
          <label className="label">Add people (Optional)</label>
          <SearchSelect />
        </div>
        </div>
      </Grid>
    </div>
  );
}

export default AddStory;
