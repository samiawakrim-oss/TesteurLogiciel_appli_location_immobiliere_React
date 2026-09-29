import { useState } from 'react'
import './Collapse.css'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(previousState => !previousState)
  }

  return (
    <section className={`collapse ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="collapse-button"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span className="collapse-title">
          {title}
        </span>

        <span
          className="collapse-arrow"
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </section>
  )
}

export default Collapse