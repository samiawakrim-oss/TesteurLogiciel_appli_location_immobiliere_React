import './Banner.css'

function Banner({ variant = 'home' }) {
  return (
    <section className={`banner banner-${variant}`}>
      {variant === 'home' && (
        <h1>Chez vous, partout et ailleurs</h1>
      )}
    </section>
  )
}

export default Banner