import React from "react";
import { Container, Title, List, User, Picture, Name } from "./Styles/Profiles";

const Profiles = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Profiles.Title = function ProfilesTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...rest }) {
  return <User {...rest}>{children}</User>;
};

Profiles.Picture = function ProfilesPicture({ src, ...rest }) {
  return (
    <Picture
      {...rest}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};
export default Profiles;
