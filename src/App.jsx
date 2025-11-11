import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[#002b5c] flex items-center justify-center text-white font-bold">M</div>
          <span className="font-semibold text-[#002b5c]">Meysson Engineering</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-[#002b5c]">Services</a>
          <a href="#projects" className="hover:text-[#002b5c]">Réalisations</a>
          <a href="#about" className="hover:text-[#002b5c]">À propos</a>
          <a href="#contact" className="hover:text-[#002b5c]">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-[#ff7a00] text-white font-medium hover:opacity-90">Demander un devis</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f2f2f2] to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002b5c] leading-tight">
            L’ingénierie au service de la performance et de l’énergie durable
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Partenaire technique global pour les entreprises industrielles, commerciales et institutionnelles en Côte d’Ivoire.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#services" className="px-5 py-3 rounded-md bg-[#002b5c] text-white font-medium">Découvrir nos services</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-[#002b5c] text-[#002b5c] font-medium">Nous contacter</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'Ingénierie & Études techniques', desc: 'Conception et dimensionnement d’installations industrielles et tertiaires.' },
    { title: 'Audit énergétique', desc: 'Diagnostics détaillés et plans d’actions pour améliorer l’efficacité énergétique.' },
    { title: 'Télécommunications & Réseaux', desc: 'Conception, déploiement et supervision de réseaux fiables et sécurisés.' },
    { title: 'Optimisation industrielle', desc: 'Amélioration continue, lean management et performance opérationnelle.' },
    { title: 'Maintenance industrielle', desc: 'Maintenance préventive, corrective et prédictive des équipements.' },
    { title: 'Froid & Climatisation', desc: 'Études, installation et maintenance de systèmes CVC performants.' },
    { title: 'Projets électriques', desc: 'Courants forts et faibles pour bâtiments, industries et tertiaire.' },
  ]
  return (
    <section id="services" className="py-16 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#002b5c]">Nos domaines d’expertise</h2>
        <p className="mt-2 text-gray-700">Des solutions sur mesure alliant innovation, performance énergétique et fiabilité.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded-lg p-6 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-[#002b5c]">{it.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const examples = [
    { title: 'Optimisation énergétique usine agroalimentaire', sector: 'Audit énergétique' },
    { title: 'Déploiement réseau fibre pour site industriel', sector: 'Télécoms & Réseaux' },
    { title: 'Refonte CVC d’un siège administratif', sector: 'Froid & Climatisation' },
  ]
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#002b5c]">Réalisations</h2>
            <p className="mt-2 text-gray-700">Études de cas et projets emblématiques.</p>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {examples.map((p) => (
            <div key={p.title} className="rounded-lg overflow-hidden bg-white shadow group">
              <div className="h-40 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-[#00a651]">{p.sector}</p>
                <h3 className="mt-1 font-semibold text-[#002b5c]">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Société Industrielle A', quote: 'Des experts fiables et engagés. Résultats concrets.' },
    { name: 'Collectivité B', quote: 'Accompagnement de bout en bout, excellent niveau technique.' },
    { name: 'Entreprise C', quote: 'Des gains mesurables en performance énergétique.' },
  ]
  return (
    <section className="py-16 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#002b5c]">Ils nous font confiance</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 shadow">
              <p className="text-gray-700">“{t.quote}”</p>
              <p className="mt-3 text-sm font-medium text-[#002b5c]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ full_name: '', company: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Envoi...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'site-web' })
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Erreur')
      setStatus('Merci, votre demande a été envoyée. Nous vous contactons rapidement.')
      setForm({ full_name: '', company: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus(`Échec de l’envoi: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#002b5c]">Contact & Devis</h2>
            <p className="mt-2 text-gray-700">Parlez-nous de votre besoin : ingénierie, audit énergétique, télécoms, CVC, maintenance…</p>
            <div className="mt-6 bg-[#f2f2f2] p-6 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Adresse:</span> Abidjan, Côte d’Ivoire</p>
              <p className="text-sm"><span className="font-semibold">Email:</span> contact@meysson-eng.ci</p>
              <p className="text-sm"><span className="font-semibold">Téléphone:</span> +225 00 00 00 00</p>
            </div>
          </div>
          <form onSubmit={submit} className="bg-white rounded-lg p-6 shadow space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="full_name" value={form.full_name} onChange={onChange} placeholder="Nom complet" className="input" required />
              <input name="company" value={form.company} onChange={onChange} placeholder="Entreprise (optionnel)" className="input" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" className="input" required />
              <input name="phone" value={form.phone} onChange={onChange} placeholder="Téléphone" className="input" />
            </div>
            <input name="subject" value={form.subject} onChange={onChange} placeholder="Objet" className="input" required />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Votre message" rows="5" className="input" required />
            <button type="submit" className="px-5 py-3 rounded-md bg-[#ff7a00] text-white font-medium hover:opacity-90">Envoyer</button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#002b5c] text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold">Meysson Engineering</p>
          <p className="mt-2 text-white/80">Ingénierie, Énergie et Innovation pour un futur durable.</p>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <ul className="mt-2 space-y-1 text-white/80">
            <li>Ingénierie & Études</li>
            <li>Audit énergétique</li>
            <li>Télécoms & Réseaux</li>
            <li>Maintenance industrielle</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-2 text-white/80">Abidjan, Côte d’Ivoire</p>
          <p className="text-white/80">contact@meysson-eng.ci</p>
        </div>
      </div>
      <div className="mt-8 text-center text-white/70 text-xs">© {new Date().getFullYear()} Meysson Engineering. Tous droits réservés.</div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: 'Inter, Manrope, system-ui' }}>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
