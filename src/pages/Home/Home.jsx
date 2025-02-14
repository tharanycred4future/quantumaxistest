import GetInTouchButton from "../../components/GetInTouchButton/GetInTouchButton"
import Header from "../../components/Header/Header"
import ServicePage from '../../components/ServicePage/ServicePage'
import './Home.css'





const Home = () => {
  return (
    <div className="home-container" >
      <Header  />
      <ServicePage />
      <div className='get-in-touch-button-container'>
      <GetInTouchButton  />
      </div>
      
      
      
     
      
    </div>
  )
}

export default Home;
