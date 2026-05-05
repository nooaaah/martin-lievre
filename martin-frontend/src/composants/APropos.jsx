export default function APropos() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-6 lg:px-12 py-16 lg:py-24" style={{borderTop: '1px solid #1a1a1a'}}>
      <div className="lg:max-w-xl">
        <p className="text-gray-400 text-xs tracking-[3px] uppercase mb-8">À propos</p>
        <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">Martin Lièvre</h2>
        <p className="text-gray-400 mb-5 leading-relaxed">Martin Lièvre, né en 2003, est compositeur et arrangeur, actuellement étudiant en percussions à la Haute École de Musique de Lausanne.</p>
        <p className="text-gray-400 mb-5 leading-relaxed">Il débute la musique à l'âge de 7 ans, d'abord par la clarinette, puis à ses 16 ans il change drastiquement d'instrument pour se consacrer à la percussion. Il rentre en 2023 dans la classe d'Emmanuel Séjourné, Vassilena Serafimova et Arnaud Stachnik à la Haute École de Musique de Lausanne (HEMU).</p>
        <p className="text-gray-400 mb-5 leading-relaxed">Il enseigne la percussion dans diverses écoles de musique depuis 2023 et l'initiation musicale à l'école primaire.</p>
        <p className="text-gray-400 leading-relaxed">Depuis 2022, il affine ses techniques de compositions et d'arrangements en autodidacte. Il écrit pour tous types d'ensembles et est ouvert aux commandes pour n'importe quel style musical.</p>
      </div>
      <div className="flex-shrink-0 mt-10 lg:mt-0" style={{width: '100%', maxWidth: '380px', height: '500px'}}>
        <img src="image-1-3-VSCO.jpeg" alt="Martin Lièvre" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
