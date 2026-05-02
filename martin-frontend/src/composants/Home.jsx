import APropos from "./APropos"
import Realisations from "./Realisations"

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex items-end justify-between px-16 pb-24 pt-24">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold tracking-wider uppercase leading-tight">
            Compositeur, Arrangeur & Percussionniste
          </h1>
        </div>
        <div className="w-96 h-96">
          <img src="" alt="Martin Lièvre" className="w-full h-full object-cover" />
        </div>
      </div>
      <APropos />
      <Realisations />
    </div>
  )
}