import Banner from '../../Components/Banner/Banner'
import Gallery from '../../Components/Gallery/Gallery'

import './Home.css'

function Home() {
  return (
    <div className="home">
      <Banner variant="home" />

      <Gallery />
    </div>
  )
}

export default Home