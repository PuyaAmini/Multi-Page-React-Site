import React from "react";
import useFetch from "../hooks/useFetch";

// styles
import './Home.css'

export default function Home() {
  const {data:articles , isPending , error} =useFetch('http://localhost:3000/articles')

  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <React.Fragment>Loading...</React.Fragment>}
      {error && <React.Fragment>{error}</React.Fragment>}
      {articles && articles.map((article)=>(
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <div>{article.author}</div>
        
        </div>
      ))}
    </div>
  );
}
