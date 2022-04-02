import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
} from "@material-ui/core";
import "./Course.css";
import React, { useState } from "react";
import db from "./firebase";
import { hover } from "@testing-library/user-event/dist/hover";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid light-grey",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Course(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.details.name);

  const updateCourse = () => {
    // update the input with the updated course
    db.collection("Courses").doc(props.details.id).set(
      {
        name: input,
      },
      { merge: true }
    );

    setOpen(false);
  };


  const boxStyle = {
      width: '50%',
      backgroundColor: '#fdfdfd',
      margin: '0 auto',
      "boxStyle:hover": {
        backgroundColor: '#ebebeb',
        cursor: 'pointer'
      }
  };

  return (
    <div style={boxStyle}>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h3>Edit the course</h3>
          <form>
            <FormControl>
              <InputLabel>✅ Edit the course</InputLabel>
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            </FormControl>

            <Button
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={updateCourse}
            >
              Update
            </Button>

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={(e) => setOpen(false)}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            primary={props.details.name}
            secondary={"🔑 ID: " + props.details.id}
          ></ListItemText>
          <Button onClick={(e) => setOpen(true)}>✍🏻</Button>
          <Button
            onClick={(event) =>
              db.collection("Courses").doc(props.details.id).delete()
            }
          >
            🗑
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Course;
