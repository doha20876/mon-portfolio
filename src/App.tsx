function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold text-purple-500 mb-4">
        Doha Portfolio
      </h1>

      <p className="text-xl text-gray-300 mb-8 text-center">
        Étudiante en développement web & IA au Maroc MA
      </p>

      <div className="flex gap-4">

        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl text-lg transition">
          Mes Projets
        </button>

        <button className="border border-white px-6 py-3 rounded-2xl text-lg hover:bg-white hover:text-black transition">
          Contact
        </button>

      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6 w-full max-w-5xl">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">
            React
          </h2>

          <p className="text-gray-400">
            Création d’interfaces modernes et rapides avec React + TypeScript.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">
            IA
          </h2>

          <p className="text-gray-400">
            Passionnée par l’intelligence artificielle et le machine learning.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">
            UI/UX
          </h2>

          <p className="text-gray-400">
            Design responsive, moderne et expérience utilisateur fluide.
          </p>
        </div>

      </div>

    </div>
  )
}

export default App