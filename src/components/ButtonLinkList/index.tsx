import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import { ListInline } from "./styles";

interface ILink {
  href?: string;
  icon?: "github" | "instagram" | "facebook" | "linkedin" | "twitter";
}

interface IButtonLinkList {
  buttons?: ILink[];
}

const ButtonLinkList: React.FC<IButtonLinkList> = (props) => {
  const buttons = props.buttons;

  return (
    <ListInline>
      {buttons.map((button, index) => {
        return (
          <li key={index}>
            <a
              href="https://github.com/EddyPBR"
              rel="noopener noreferrer"
              target="_blank"
            >
              {button.icon === "github" && <FiGithub />}
              {button.icon === "instagram" && <FiInstagram />}
              {button.icon === "facebook" && <FiFacebook />}
              {button.icon === "linkedin" && <FiLinkedin />}
              {button.icon === "twitter" && <FiTwitter />}
            </a>
          </li>
        );
      })}
    </ListInline>
  );
};

export default ButtonLinkList;
