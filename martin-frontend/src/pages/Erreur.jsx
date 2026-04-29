

import { Link } from 'react-router'


function Erreur() {
  return (
    <div className="erreur-container">
      

      <div className="erreur-content">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="LinkNav">
          Retourner sur la page d’accueil
        </Link>
      </div>

      
    </div>
  )
}

export default Erreur