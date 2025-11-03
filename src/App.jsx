import { useState, useRef } from 'react'
import './App.css'


const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~"



function App() {
  // stati controllati del form
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')
  // stati di errore 
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  // stati non controllati
  const fullNameRef = useRef(null)
  const specializationRef = useRef(null)
  const experienceRef = useRef(null)



  // validazione di stati controllati 

  const validateUsername = (value) => {
    // controllo sulla lunghezza
    if (value.length < 6) {
      setUsernameError('Username troppo corto, minimo 6 caratteri')
      return
    }

    // 2. controllo sugli spazi
    if (value.includes(' ')) {
      setUsernameError('Username non valido, non sono consentiti spazi')
      return
    }

    // 3. controllo sui simboli
    for (let char of value) {
      if (symbols.includes(char)) {
        setUsernameError('Username non valido, non sono consentiti caratteri speciali')
        return
      }
    }

    setUsernameError('')
  }

  const validatePassword = (value) => {
    // controllo lunghezza
    if (value.length < 8) {
      setPasswordError(`Passowrd non valida. Deve contenere almeno 8 caratteri`)
      return
    }
    // controllo spazi
    if (value.includes(' ')) {
      setPasswordError(`Password non valida. Non sono consentiti spazi`)
      return
    }
    // controllo caratteri richiesti
    let includesLetter = false
    let includesNumber = false
    let includesSymbol = false

    for (let char of value) {
      if (letters.includes(char)) includesLetter = true
      if (numbers.includes(char)) includesNumber = true
      if (symbols.includes(char)) includesSymbol = true
    }
    // se non include una lettera
    if (!includesLetter) {
      setPasswordError('Errore. La password deve contenere almeno 1 lettera')
      return
    }
    // se non include un numero
    if (!includesNumber) {
      setPasswordError('Errore. La password deve contentere almeno 1 numbero')
      return
    }
    // se non include simboli
    if (!includesSymbol) {
      setPasswordError('Errore. La password deve contenere almeno 1 carattere speciale')
      return
    }

    setPasswordError('')
  }

  const validateDescription = (value) => {
    // controllo se è troppo corta (senza contare gli spazi)

    if (value.trim().length < 100) {
      setDescriptionError(`La descrizione è troppo corta. Deve contenere almeno 100 caratteri.`)
      return
    }

    // controllo se è troppo lunga (senza contare gli spazi)
    if (value.trim().length > 1000) {
      setDescriptionError(`La descrizione è troppo lunga. Deve contenere massimo 1000 caratteri.`)
      return
    }
    setDescriptionError('')
  }




  function handleSubmit(e) {
    e.preventDefault()

    const fullName = fullNameRef.current.value
    const specialization = specializationRef.current.value
    const experience = experienceRef.current.value

    // validazioni al submit

    if (!fullName || !specialization) {
      alert('Compila tutti i campi per poter proseguire')
    }
    if (experience < 0) {
      alert('Non sono consentiti numeri negativi')
    }

    console.log('Complimenti! Hai compeltato la registrazione con successo')

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
                    placeholder="Inserisci il tuo nome completo"
                    ref={fullNameRef}

                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="mariorossi123"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value)
                      validateUsername(e.target.value)
                    }}
                  />
                </div>
                {/* Erorre Username */}
                {usernameError && (
                  <span className='text-danger'>{usernameError}</span>
                )}

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Inserisci la tua password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      validatePassword(e.target.value)
                    }}
                  />
                </div>
                {/* Errore Password */}
                {passwordError && (
                  <span className='text-danger'>{passwordError}</span>
                )}

                <div className="mb-3">
                  <label className="form-label">Specializzazione</label>
                  <select
                    className="form-select"
                    ref={specializationRef}

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
                    ref={experienceRef}

                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Breve Descrizione</label>
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Raccontaci di te..."
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value)
                      validateDescription(e.target.value)
                    }}
                  />
                </div>
                {/* Errore Descrizione */}

                {descriptionError && (
                  <span className='text-danger'>{descriptionError}</span>
                )}

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