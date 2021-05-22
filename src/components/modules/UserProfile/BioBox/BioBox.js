import axios from "axios";
import React, { useState } from "react";

import { Wrapper, Bio } from "./StyledBioBox";

import { env } from "../../../../utils/EnvironmentVariables.js";

export default function BioBox({ data }) {
  const [bioText, setBioText] = useState(data.bio);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const handleTextChange = e => {
    setBioText(e.target.value);
  };

  const sendText = () => {
    axios
      .put(
        env().API_URL + `/users/${data.id}/profile`,
        { bio: bioText },
        { withCredentials: true }
      )
      .then(res => {
        console.log(res);
        setIsReadOnly(true);
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <Wrapper>
      <br />
      <Bio
        rows="4"
        cols="50"
        placeholder="Write your bio here!"
        maxlength="144"
        value={bioText}
        onChange={handleTextChange}
        readOnly={isReadOnly}
        onClick={e => setIsReadOnly(false)}
      ></Bio>
      <br />
      <button onClick={e => setIsReadOnly(false)}>Edit</button>
      <button onClick={sendText}>Save</button>
    </Wrapper>
  );
}
