import React, { AnchorHTMLAttributes } from "react";

import { LinkButton } from "./styles";

interface IButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  isFormButton: true | false;
}

const Button: React.FC<IButton> = (props) => {
  const { href, isFormButton, rel, target } = props;

  return (
    <LinkButton href={href} rel={rel} target={target}>
      {props.children}
    </LinkButton>
  );
};

export default Button;
