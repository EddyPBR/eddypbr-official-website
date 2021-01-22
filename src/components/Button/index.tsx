import React from 'react';

import { LinkButton } from './styles';

interface IButton {
  href?: string;
  isFormButton: true | false;
}

const Button: React.FC<IButton> = (props) => {
  const { href, isFormButton } = props;

  return <LinkButton href={href}>
    {props.children}
  </LinkButton>
}

export default Button;