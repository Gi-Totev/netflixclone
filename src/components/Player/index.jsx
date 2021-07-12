import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import { Container, Button, Overlay, Inner } from "./Styles/Player";

export const PlayerContext = createContext();

const Player = ({ children, ...rest }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...rest}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = function PlayerVideo({ src, ...rest }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...rest}>
          <Inner>
            <ReactPlayer
              url={src}
              controls
              width={`${window.innerWidth / 1.6}px`}
              height={`${((window.innerWidth / 1.6) * 9) / 16}px`}
              playing={true}
              loop={false}
            />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayButton({ ...rest }) {
  const { setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      {...rest}
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
    >
      Play
    </Button>
  );
};

export default Player;
