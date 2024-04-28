import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);
  return <React.Fragment>
       {isPending && <React.Fragment>Loading...</React.Fragment>}
       {error && <React.Fragment>{error}</React.Fragment>}
       {article && (
              <React.Fragment>
                     <h2>{article.title}</h2>
                     <p>{article.author}</p>
                     <p>{article.body}</p>
              </React.Fragment>
       )}
  </React.Fragment>;
}
