export default function APropos() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-6 lg:px-12 py-16 lg:py-24" style={{borderTop: '1px solid #1a1a1a'}}>
      <div className="lg:max-w-xl">
        <p className="text-gray-400 text-xs tracking-[3px] uppercase mb-8">À propos</p>
        <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">Martin Lièvre</h2>
        <p className="text-gray-400 mb-5 leading-relaxed">Martin Lièvre (né en 2003) est un compositeur et arrangeur suisse, actuellement étudiant en percussions à la Haute École de Musique de Lausanne (HEMU).</p>
        <p className="text-gray-400 mb-5 leading-relaxed">Après des débuts à la clarinette à l’âge de 7 ans, il se tourne vers la percussion à 16 ans, développant un intérêt marqué pour la création musicale. Depuis 2022, il se consacre activement à la composition et à l’arrangement, explorant une grande diversité de styles et de formations. En 2023, il intègre le classe de percussions d’Emmanuel Séjourné, Vassilena Serafimova et Arnaud Stachnick.</p>
        <p className="text-gray-400 mb-5 leading-relaxed">Parallèlement à ses études, il enseigne la percussion et l’initiation musicale. Ouvert aux collaborations et aux commandes, il écrit pour tous types d’ensembles.</p>
      </div>
      <div className="flex-shrink-0 mt-10 lg:mt-0" style={{width: '100%', maxWidth: '380px', height: '500px'}}>
        <img src="Martin.png" alt="Martin Lièvre" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
