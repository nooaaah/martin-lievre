import { useParams } from "react-router-dom";

export default function Projets() {
  const { type, category } = useParams();

  return (
    <div>
      <h1>{type}</h1>
      <h2>{category}</h2>
    </div>
  );
}