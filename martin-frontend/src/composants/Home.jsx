import APropos from "./APropos"

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero__texte">
          <h1>COMPOSITEUR, ARRANGEUR & PERCUSSIONNISTE</h1>
        </div>
        <div className="hero__image">
          <img src="" alt="Martin Lièvre" />
        </div>
      </div>

      <APropos />
    </div>
  )
}