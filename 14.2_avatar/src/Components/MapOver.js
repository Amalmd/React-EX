import React from "react";
import SingleAvatar from "./SingleAvatar";
import styled from "@emotion/styled";

const UL = styled.ul`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  list-style-type: none;
`;
const MapOver = (props) => {
  return (
    <UL>
      {props.avatars.map((avatar) => (
        <SingleAvatar
          name={avatar.name}
          img={avatar.img}
          key={Math.random().toString()}
        />
      ))}
    </UL>
  );
};

export default MapOver;
