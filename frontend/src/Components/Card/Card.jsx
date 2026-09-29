import { Link } from 'react-router-dom'
import './Card.css'

function Card({ logement }) {
  return (
    <Link
      to={`/logement/${logement.id}`}
      className="card"
    >
      {/* Image principale du logement */}
      <img
        src={logement.cover}
        alt={logement.title}
      />

      {/* Nom du logement */}
      <h2>{logement.title}</h2>
    </Link>
  )
}

export default Card