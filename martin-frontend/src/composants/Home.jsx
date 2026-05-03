import APropos from "./APropos"
import Realisations from "./Realisations"

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-between px-12 pt-24">
        <div className="max-w-2xl">
          <p className="text-gray-600 text-xs tracking-[3px] uppercase mb-6">Compositeur · Arrangeur · Percussionniste</p>
          <div style={{width: '30px', height: '1px', background: '#fff', marginBottom: '24px'}}></div>
          <h1 className="text-7xl font-light text-white tracking-wide leading-tight">
            Compositeur,<br />Arrangeur &<br />Percussionniste
          </h1>
        </div>
        <div className="flex-shrink-0" style={{width: '400px', height: '600px'}}>
          <img src="image-2-3-VSCO-1.jpeg" alt="Martin Lièvre" className="w-full h-full object-cover" />
        </div>
      </div>
      <APropos />
      <Realisations />
    </div>
  )
}