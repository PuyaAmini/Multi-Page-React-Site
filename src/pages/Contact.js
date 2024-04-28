import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Contact</h2>
      <h4>Hi {name}</h4>
      <p>
        “Can’t be gabbin right now, I’m just a beginner still tryin to make
        sense of it all, ya know!”
      </p>
    </div>
  );
}
