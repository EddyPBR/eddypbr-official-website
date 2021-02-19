import React from "react";

import { LineStyle } from "./styles";

interface ILine {
  color?: string;
  marginTop?: Number;
  marginBottom?: Number;
}

const Line: React.FC<ILine> = (props) => {
  return (
    <LineStyle
      color={props.color}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    />
  );
};

export default Line;
