import profile from '../assets/profile.jpeg'
import Navbar from '../components/Navbar'

function Recording(){
  return (
    <>
      <Navbar />
      <img src={profile} className="logo" /><br/>
      Al Waidah <br />
      Recording
    </>
  )
}
export default Recording