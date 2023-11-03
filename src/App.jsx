import Footer from './components/Footer'
import Nav from './components/Nav'
import Header from './components/Header'
import AboutSection from './components/ActionSection'

function App() {

  return (
    <>
      <main className="flex-shrink-0">
        <Nav />
        <Header />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}

export default App
