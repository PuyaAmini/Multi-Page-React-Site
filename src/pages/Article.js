import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: Article, isPending, error } = useFetch(url);
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
