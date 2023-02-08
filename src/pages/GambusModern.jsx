import profile from '../assets/profile.jpeg'
import Navbar from '../components/Navbar'

function GambusModern(){
  return (
    <>
      <Navbar />
      <img src={profile} className="logo" /><br/>
      Al Waidah <br />
      Gambus Modern
    </>
  )
}
export default GambusModern