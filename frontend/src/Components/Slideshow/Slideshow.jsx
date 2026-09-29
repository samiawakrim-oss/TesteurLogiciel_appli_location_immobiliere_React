import { useState } from 'react'

import './Slideshow.css'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Affiche l'image précédente
  const previousImage = () => {
    setCurrentIndex(previousIndex =>
      previousIndex === 0
        ? pictures.length - 1
        : previousIndex - 1
    )
  }

  // Affiche l'image suivante
  const nextImage = () => {
    setCurrentIndex(previousIndex =>
      previousIndex === pictures.length - 1
        ? 0
        : previousIndex + 1
    )
  }

  // Sécurité si aucune image n'est disponible
  if (!pictures || pictures.length === 0) {
    return null
  }

  return (
    <div className="slideshow">

      <img
        src={pictures[currentIndex]}
        alt={`Vue ${currentIndex + 1} du logement`}
      />

      {pictures.length > 1 && (
        <>
          <button
            type="button"
            className="slideshow-arrow previous"
            aria-label="Image précédente"
            onClick={previousImage}
          >
            ‹
          </button>

          <button
            type="button"
            className="slideshow-arrow next"
            aria-label="Image suivante"
            onClick={nextImage}
          >
            ›
          </button>

          <span className="slideshow-counter">
            {currentIndex + 1} / {pictures.length}
          </span>
        </>
      )}

    </div>
  )
}

export default Slideshow