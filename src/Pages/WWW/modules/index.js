import React from "react";
import Choices from "./choices";
import Next from "./next";

const Main = ({ sceneState, openSettings, classes, chapter }) => {
  const [scene] = sceneState;
  const ReactCompo = [];

  if ("choices" in scene) {
      ReactCompo.push(<Choices sceneState={sceneState} openSettings={openSettings} chapter={chapter} classes={classes}/>);
  }

  if ("next" in scene) {
      ReactCompo.push(<Next sceneState={sceneState} chapter={chapter} />)
  }

  return ReactCompo;
};

export const openDrawer = ({scene,controls, openState}) => () => {
    if ("choices" in scene) {
        openState.current = true;
        controls.start({ y: -160 });
    }
}

export default Main;