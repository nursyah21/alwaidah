import profile from '../assets/profile.jpeg'
import Navbar from '../components/Navbar'

function Pelatih(){
  return (
    <>
      <Navbar />
      <img src={profile} className="logo" /><br/>
      Al Waidah <br />
      Pelatih
    </>
  )
}
export default Pelatih