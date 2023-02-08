import profile from '../assets/profile.jpeg'
import Navbar from '../components/Navbar'

function Berita(){
  return (
    <>
      <Navbar />
      <img src={profile} className="logo" /><br/>
      Al Waidah <br />
      Berita
    </>
  )
}
export default Berita