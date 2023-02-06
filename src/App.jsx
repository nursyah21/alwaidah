import profile from './assets/profile.jpeg'
import './App.css'

function Navbar(){
  return (
    <>
      Navbar
    </>
  )
}

function App() {
  return (
    <>
      <div className='root'>
      <Navbar /> <br/> 
        <img src={profile} className="logo" /><br/>
        Al Waidah
      </div>
    </>
  )
}

export default App
