import profile from '../assets/profile.jpeg'
import Navbar from '../components/Navbar'

function GambusTradisional(){
  return (
    <>
      <Navbar />
      <img src={profile} className="logo" /><br/>
      Al Waidah <br />
      Gambus Tradisional
    </>
  )
}
export default GambusTradisional