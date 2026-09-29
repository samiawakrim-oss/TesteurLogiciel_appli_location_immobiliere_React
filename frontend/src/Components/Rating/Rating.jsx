import './Rating.css'

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating" aria-label={`Note : ${rating} sur 5`}>
      {stars.map(star => (
        <span
          key={star}
          className={star <= Number(rating) ? 'active' : ''}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating