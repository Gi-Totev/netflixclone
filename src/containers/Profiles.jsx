import React from "react";
import { Header } from "../components";
import { Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

const SelectProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix Clone" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user?.photoURL} alt={user?.displayName} />
            <Profiles.Name>{user?.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
