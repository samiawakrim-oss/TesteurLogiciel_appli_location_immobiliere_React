import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './Gallery.css'

function Gallery() {
  // Liste de tous les logements (au début c'est vide)
  const [logements, setLogements] = useState([])

  // Pour savoir si on est en train de charger
  const [loading, setLoading] = useState(true)

  // Pour savoir s'il y a eu une erreur
  const [error, setError] = useState(false)

  useEffect(() => {
    // Au chargement de la page, on va chercher tous les logements
    // L'adresse vient de ton fichier .env : http://localhost:8080
    fetch(`${import.meta.env.VITE_API_URL}/api/properties`)
      .then(response => {
        // Si le serveur répond avec une erreur (404, 500...)
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des logements')
        }
        return response.json() // on transforme en objet JS
      })
      .then(data => {
        setLogements(data) // on garde tous les logements reçus
        setLoading(false) // on a fini de charger
      })
      .catch(error => {
        // S'il y a un problème de connexion
        console.error(error)
        setError(true)
        setLoading(false)
      })
  }, []) // [] = on le fait une seule fois au début

  // 1er cas : on attend le backend
  if (loading) {
    return <p>Chargement des logements...</p>
  }

  // 2ème cas : le backend ne répond pas
  if (error) {
    return <p>Impossible de charger les logements.</p>
  }

  // 3ème cas : tout est ok, on affiche les cartes
  return (
    <section className="gallery">
      {/* Pour chaque logement, on crée une carte */}
      {logements.map(logement => (
        <Card
          key={logement.id} // React a besoin d'une clé unique
          logement={logement} // on passe le logement à la carte
        />
      ))}
    </section>
  )
}

export default Gallery