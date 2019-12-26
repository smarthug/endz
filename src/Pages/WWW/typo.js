import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Typography } from "@material-ui/core";

const Main = ({contents}) => {
  return (
    <>
      {/* <Typography variant="h4">[endZ]</Typography> */}
      <Typist>
        <p
          style={{
            wordBreak: "break-all",
            display: "inline",
            whiteSpace: "pre-wrap"
          }}
        >
          {contents}
        </p>
      </Typist>
    </>
  );
};

export default Main;
