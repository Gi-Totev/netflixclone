import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Background,
  Feature,
  FeatureCallOut,
  Picture,
  Profile,
  Dropdown,
  Text,
  TextLink,
  Group,
  Container,
  Logo,
  Button,
  ButtonLink,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
  Opacity,
} from "./Styles/Header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? (
    <Background {...restProps}>
      <Opacity>{children}</Opacity>
    </Background>
  ) : (
    children
  );
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...rest }) {
  return <Dropdown {...rest}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...rest }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...rest}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Films and Series"
        active={searchActive}
      />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton({ children, ...rest }) {
  return <PlayButton {...rest}>{children}</PlayButton>;
};

export default Header;
