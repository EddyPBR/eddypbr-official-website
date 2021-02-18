import React from "react";

import { LineStyle } from "./styles";

interface ILine {
  color?: string;
  margin?: Number;
}

const Line: React.FC<ILine> = (props) => {
  return <LineStyle color={props.color} margin={props.margin} />;
};

export default Line;
