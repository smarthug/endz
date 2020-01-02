import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Divider
} from "@material-ui/core";

const Main = ({sceneState, openSettings, classes, chapter}) => {
    const [scene, setScene] = sceneState;
    console.log(scene)
    const onChoiceClick = choiceScene => () => {
        setScene(chapter[choiceScene]);
      };

    return (
            <React.Fragment>
              <MenuItem onClick={openSettings}>
                {scene.choices.question}
              </MenuItem>
              <Divider fullWidth />
              <List className={classes.settingsList}>
                {scene.choices.options.map((i, d) => (
                  <ListItem button>
                    <ListItemText
                      id={d}
                      primary={i[0]}
                      onClick={onChoiceClick(i[1])}
                    />
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
    )
}

export default Main;