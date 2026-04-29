import { useEffect, useState } from "react";

export default function Realisations() {
  const [projets, setProjets] = useState([]);

  

  return (
    <div>
      {projets.map((p) => (
        <div key={p.id}>
          <h2>{p.title.rendered}</h2>
          <p dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
        </div>
      ))}
    </div>
  );
}