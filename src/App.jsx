import { useState } from 'react'
import './App.css'

function App() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [experience, setExperience] = useState(0)
  const [description, setDescription] = useState('')


  handleSubmit((e) => {
    e.preventDefault()
  })

  return (
    <>

    </>
  )
}

export default App