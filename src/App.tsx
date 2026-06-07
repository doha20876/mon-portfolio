function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">

      {/* HERO */}

      <h1 className="text-7xl font-bold text-purple-500 text-center mb-6">
        Doha Portfolio
      </h1>

      <p className="text-2xl text-gray-300 text-center mb-10">
        Étudiante en développement web & IA au Maroc
      </p>

      <div className="flex gap-5 mb-24">

        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-xl transition">
          Mes Projets
        </button>

        <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-xl transition">
          Contact
        </button>

      </div>

      {/* SKILLS */}

      <section className="mt-10 text-center">

        <h2 className="text-6xl font-bold text-purple-500 mb-16">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          <span className="bg-purple-600 px-6 py-3 rounded-2xl text-xl">
            React
          </span>

          <span className="bg-purple-600 px-6 py-3 rounded-2xl text-xl">
            TypeScript
          </span>

          <span className="bg-purple-600 px-6 py-3 rounded-2xl text-xl">
            Tailwind CSS
          </span>

          <span className="bg-purple-600 px-6 py-3 rounded-2xl text-xl">
            JavaScript
          </span>

          <span className="bg-purple-600 px-6 py-3 rounded-2xl text-xl">
            HTML
          </span>

          <span className="bg-purple-600 px-6 py-3 rounded-2xl text-xl">
            CSS
          </span>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="mt-32 w-full max-w-6xl">

        <h2 className="text-6xl font-bold text-center text-purple-500 mb-16">
          Mes Projets
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 hover:scale-105 transition">

            <h3 className="text-4xl font-bold mb-5">
              Site E-commerce
            </h3>

            <p className="text-gray-400 text-xl mb-8 leading-10">
              Boutique moderne développée avec React et Tailwind CSS.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl text-lg transition">
              Voir Projet
            </button>

          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 hover:scale-105 transition">

            <h3 className="text-4xl font-bold mb-5">
              Application IA
            </h3>

            <p className="text-gray-400 text-xl mb-8 leading-10">
              Projet intelligent utilisant l’intelligence artificielle.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl text-lg transition">
              Voir Projet
            </button>

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section className="mt-32 w-full max-w-6xl">

        <h2 className="text-6xl font-bold text-center text-purple-500 mb-16">
          Education
        </h2>

        <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">

          <h3 className="text-4xl font-bold mb-4">
            Université Cadi Ayyad
          </h3>

          <p className="text-2xl text-gray-400 mb-4">
            Développement Web & Intelligence Artificielle
          </p>

          <p className="text-xl text-gray-500">
            Marrakech, Maroc • 2023 - 2025
          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section className="mt-32 text-center">

        <h2 className="text-6xl font-bold text-purple-500 mb-8">
          Contact
        </h2>

        <p className="text-2xl text-gray-400 mb-4">
          Email : doha@example.com
        </p>

        <p className="text-2xl text-gray-400 mb-10">
          Marrakech, Maroc
        </p>

        <div className="flex justify-center gap-5">

          <a
            href="https://github.com/doha20876"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-xl transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-xl transition"
          >
            LinkedIn
          </a>

        </div>

      </section>

    </div>
  )
}

export default App