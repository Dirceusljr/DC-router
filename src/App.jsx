import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App({children}) {

  return (
    <>
    <NavBar />
      <h1>Olá mundo</h1>
      <h2>Segundo elemento</h2>
      <Outlet />
      <h3>Outro local para elemento</h3>
    </>
  )
}

export default App
