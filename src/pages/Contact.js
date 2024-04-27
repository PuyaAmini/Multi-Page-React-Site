import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {

  // Get the query string from the current location(url bar)
  const queryString = useLocation().search

  {/*URLSearchParams object is a utility that allows for easy manipulation of query strings,
 which are the part of a URL after the question mark ?  */}
  const queryParams = new URLSearchParams(queryString)
  
  // Extract the value of the "name" parameter from the query parameters
  const name = queryParams.get("name")


  return (
    <div>
      <h2>Contact</h2>
      <h4>hey {name}</h4>
      <p>
        “Can’t be gabbin right now, I’m just a beginner still tryin to make
        sense of it all, ya know!”
      </p>
    </div>
  );
}
