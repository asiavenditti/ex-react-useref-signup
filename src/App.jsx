import { useState } from 'react'
import './App.css'

function App() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [experience, setExperience] = useState(0)
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Registrazione</h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mario Rossi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="mariorossi123"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Inserisci la tua password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Specializzazione</label>
                  <select
                    className="form-select"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  >
                    <option value="">Seleziona specializzazione</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Anni di Esperienza</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Breve Descrizione</label>
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Raccontaci di te..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Conferma i tuoi dati
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App