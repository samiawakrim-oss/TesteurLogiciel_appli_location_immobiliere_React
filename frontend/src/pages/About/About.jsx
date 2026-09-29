import Banner from '../../Components/Banner/Banner'
import Collapse from '../../Components/Collapse/Collapse'

import './About.css'

function About() {
  return (
    <div className="about">
      <Banner variant="about" />

      <div className="about-collapses">

        <Collapse title="Fiabilité">
          <p>
            Les annonces proposées par Kasa sont vérifiées.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p>
            Kasa place la confiance au cœur de son service.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p>
            Notre équipe accompagne les utilisateurs.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>
            La sécurité des utilisateurs est une priorité.
          </p>
        </Collapse>

      </div>
    </div>
  )
}

export default About