export default function MentionsLegales() {
  return (
    <div className="px-6 lg:px-12 py-24 pt-32 max-w-3xl">
      <p className="text-gray-400 text-xs tracking-[3px] uppercase mb-6">Légal</p>
      <h1 className="text-4xl font-light text-white mb-16">Mentions légales</h1>

      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-white font-light text-xl mb-4">1. Éditeur du site</h2>
          <p className="text-gray-400 leading-relaxed">Nom : Martin Lièvre<br />Email : martinlievre123@gmail.com<br />Directeur de la publication : Martin Lièvre</p>
        </div>

        <div>
          <h2 className="text-white font-light text-xl mb-4">2. Hébergeur du site</h2>
          <p className="text-gray-400 leading-relaxed">Nom de l'hébergeur : …</p>
        </div>

        <div>
          <h2 className="text-white font-light text-xl mb-4">3. Propriété intellectuelle</h2>
          <p className="text-gray-400 leading-relaxed">L'ensemble du contenu du site Martin Lièvre (textes, images, graphiques, logos, vidéos, éléments sonores, etc.) est protégé par les lois suisses et internationales relatives à la propriété intellectuelle. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces éléments est strictement interdite sans l'accord écrit préalable de Martin Lièvre.</p>
        </div>

        <div>
          <h2 className="text-white font-light text-xl mb-4">4. Protection des données personnelles</h2>
          <p className="text-gray-400 leading-relaxed">Martin Lièvre s'engage à ce que la collecte et le traitement de vos données personnelles soient conformes au RGPD et à la loi Informatique et Libertés.<br /><br />
          Responsable du traitement : Martin Lièvre<br />
          Finalité du traitement : gestion des demandes de contact<br />
          Durée de conservation : 1 mois<br /><br />
          Vous disposez des droits suivants : droit d'accès, droit de rectification, droit à l'effacement, droit à la limitation du traitement, droit d'opposition, droit à la portabilité. Pour exercer ces droits, contactez-nous par email.</p>
        </div>

        <div>
          <h2 className="text-white font-light text-xl mb-4">5. Cookies</h2>
          <p className="text-gray-400 leading-relaxed">Le site Martin Lièvre utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer vos préférences via les paramètres de votre navigateur.</p>
        </div>

        <div>
          <h2 className="text-white font-light text-xl mb-4">6. Droit applicable</h2>
          <p className="text-gray-400 leading-relaxed">Les présentes mentions légales sont soumises au droit suisse. Date de dernière mise à jour : 01/01/2025</p>
        </div>
      </div>
    </div>
  )
}