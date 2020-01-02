import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Divider
} from "@material-ui/core";

const Main = ({ sceneState, chapter }) => {
  const [scene, setScene] = sceneState;
  console.log(scene);
  const onChoiceClick = choiceScene => () => {
    setScene(chapter[choiceScene]);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={onChoiceClick(scene.next[1])}>{scene.next[0]}</MenuItem>
    </React.Fragment>
  );
};

export default Main;
