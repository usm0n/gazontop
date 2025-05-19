import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Recommend from "../components/Recommend"
import bgImage from '../assets/images/background.jpg'
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <main className="main">
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="main-overlay">
          <div className="main-content">
            <Navbar />
            <Header />
            <Recommend />
            <About/>
            <Contact/>
            <Footer/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
