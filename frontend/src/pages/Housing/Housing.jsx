import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import NotFound from '../NotFound/NotFound'

import Slideshow from '../../Components/Slideshow/Slideshow'
import Tags from '../../Components/Tags/Tags'
import Rating from '../../Components/Rating/Rating'
import Collapse from '../../Components/Collapse/Collapse'

import './Housing.css'

function Housing() {
  // On récupère l'id dans l'URL, ex: /housing/123
  const { id } = useParams()

  // 3 états pour gérer la page
  const [logement, setLogement] = useState(null) // le logement à afficher
  const [loading, setLoading] = useState(true) // est-ce qu'on charge?
  const [error, setError] = useState(false) // est-ce qu'il y a une erreur?

  useEffect(() => {
    // 1. Télécommande pour pouvoir annuler la requête si on quitte la page vite
    const controller = new AbortController()

    // 2. On met toute la logique dans une fonction
    // C'est pour que ESLint ne crie plus "setState dans un effect"
    const fetchLogement = async () => {
      // On remet tout à zéro quand l'id change
      setLoading(true)
      setError(false)
      setLogement(null)

      try {
        // On va chercher UN seul logement dans le backend
        // L'adresse vient de ton.env : http://localhost:8080
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/properties/${id}`,
          {
            signal: controller.signal, // on branche la télécommande
          }
        )

        // Si le backend dit 404 ou 500
        if (!response.ok) {
          throw new Error('Logement introuvable')
        }

        const data = await response.json() // on transforme en objet
        setLogement(data) // on sauvegarde
      } catch (err) {
        // Si c'est nous qui avons annulé, on ignore
        if (err.name === 'AbortError') {
          return
        }
        // Sinon c'est une vraie erreur
        console.error(err)
        setError(true)
      } finally {
        // Dans tous les cas, on a fini de charger
        setLoading(false)
      }
    }

    fetchLogement() // on lance la fonction

    // 3. Nettoyage : si on change de logement vite, on annule l'ancien fetch
    return () => {
      controller.abort()
    }
  }, [id]) // on relance seulement si l'id change

  // Cas 1 : on attend la réponse
  if (loading) {
    return <p>Chargement du logement...</p>
  }

  // Cas 2 : erreur ou logement vide -> page 404
  if (error ||!logement) {
    return <NotFound />
  }

  // Cas 3 : tout est ok, on affiche
  return (
    <article className="housing">
      {/* Carrousel d'images */}
      <Slideshow pictures={logement.pictures} />

      <div className="housing-info">
        {/* Titre, ville et tags */}
        <div className="housing-description">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        {/* Propriétaire + note */}
        <div className="housing-host">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      {/* Description et équipements */}
      <div className="housing-details">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </article>
  )
}

export default Housing