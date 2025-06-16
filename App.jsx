import './style.css'
import { Button } from './components/Button'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl tracking-widest">HOUSE MINERVA</h1>
        <nav className="space-x-6">
          <a href="#villa" className="hover:underline">Villa</a>
          <a href="#facilities" className="hover:underline">Faciliteiten</a>
          <a href="#surroundings" className="hover:underline">Omgeving</a>
          <a href="#availability" className="hover:underline">Beschikbaarheid</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="relative h-[85vh] w-full">
        <img
          src="/pool.png"
          alt="Kind springt in zwembad"
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl mb-4">Exclusief vakantiehuis in de Provence</h2>
          <p className="text-lg mb-6">Ontsnap naar rust, comfort en schoonheid in het hart van de Luberon</p>
          <Button className="text-lg px-6 py-3">Beschikbaarheid checken</Button>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-gray-400">
        © 2025 House Minerva – Alle rechten voorbehouden
      </footer>
    </div>
  )
}

export default App