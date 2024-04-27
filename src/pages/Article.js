import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

export default function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: Article, isPending, error } = useFetch(url);

  const navigate  = useNavigate();
  // If there's an error, navigate to the home page after displaying the error

  useEffect(() =>{
       if(error){
              setTimeout(() => navigate('/') , 2000) //navigate(-1) = get back one page in history
       }
  } , [error , navigate])
  return (
    <div>
      {isPending && <div> Loading ... </div>}
      {error && <p>{error}</p>}
      {Article && (
        <div>
          <h2>{Article.title}</h2>
          <p>By {Article.author}</p>
          <p>{Article.body}</p>
        </div>
      )}
    </div>
  );
}
