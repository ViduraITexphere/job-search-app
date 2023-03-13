import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function UserStoryAdd(props) {

    const PaperComponent = (props) => {
        return (
            <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
        )
    }

    const handleClose = () => {
        props.setOpen(false);
        };

  return (
    <div>
    <Dialog
      open={props.open}
      aria-labelledby="draggable-dialog-title"
      PaperComponent={PaperComponent}
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Add a new story
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
      </DialogActions>
    </Dialog>
  </div>
    
  )
}

export default UserStoryAdd