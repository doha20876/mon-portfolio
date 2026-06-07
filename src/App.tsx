function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-purple-500">
          Doha ✨
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:text-purple-400">
            Projects
          </a>

          <a href="#skills" className="hover:text-purple-400">
            Skills
          </a>

          <a href="#contact" className="hover:text-purple-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-6xl font-bold text-purple-500 mb-4">
          Doha Portfolio ✨
        </h1>

        <p className="text-gray-300 text-xl max-w-2xl">
          Étudiante en développement web & IA au Maroc 🇲🇦
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl transition">
            Mes Projets
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-2xl transition">
            Contact
          </button>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Mes Projets 🚀
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-3">
              Portfolio
            </h3>

            <p className="text-gray-400">
              Portfolio moderne avec React & Tailwind.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-3">
              API Project
            </h3>

            <p className="text-gray-400">
              Application React utilisant fetch() et axios.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-3">
              React Navigation
            </h3>

            <p className="text-gray-400">
              Projet React avec plusieurs pages et navigation.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Skills 💻
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-purple-600 px-4 py-2 rounded-xl">React</span>
          <span className="bg-purple-600 px-4 py-2 rounded-xl">TypeScript</span>
          <span className="bg-purple-600 px-4 py-2 rounded-xl">Tailwind</span>
          <span className="bg-purple-600 px-4 py-2 rounded-xl">JavaScript</span>
          <span className="bg-purple-600 px-4 py-2 rounded-xl">HTML</span>
          <span className="bg-purple-600 px-4 py-2 rounded-xl">CSS</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact 📩
        </h2>

        <p className="text-gray-400">
          doha@email.com
        </p>
      </section>

    </div>
  )
}

export default App