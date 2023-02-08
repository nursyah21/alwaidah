import profile from '../assets/profile.jpeg'
import Navbar from '../components/Navbar'

function Home(){
  return (
    <>
      <Navbar />
      <img src={profile} className="logo" /><br/>
      Al Waidah <br />
      Home
    </>
  )
}
export default Home