import GetInTouchButton from "../../components/GetInTouchButton/GetInTouchButton"
import Header from "../../components/Header/Header"
import ServicePage from '../../components/ServicePage/ServicePage'
import './Home.css'
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'





const Home = () => {
  return (
    <div className="home-container" >
      <Header  />
      <ServicePage />
      <div className='get-in-touch-button-container'>
      <GetInTouchButton  />
      
      <BackToTopButton />
      </div>
      
      
      
     
      
    </div>
  )
}

export default Home;
