import './ServicePage.css'
import {StoreContext} from '../../components/context/StoreContext';
import {useContext} from 'react'
import ServiceItem from '../../components/ServiceItem/ServiceItem'
     {/*This code works on home page service section */}
const ServicePage = () => {

    const {services} = useContext(StoreContext)
        return (
    <div className='service-page'>
      <h2 className="service-page-title">Discover Marketing Strategies That Fuel Sustainable Growth
      </h2>
      <p className='service-page-des'>Don’t settle for marketing solutions that “work.” Discover marketing solutions that help your business Accelerate to the next level the way YOU want it to.</p>
      <div className="card-container">
      <div className="service-page-services">
       {services.map((service,index)=>{
        return (
          <ServiceItem  key={index} id={service._id} name={service.name} image={service.image} text={service.sub_text} description={service.description}/>
        )
       })}
      </div>
      </div>
    </div>
  )
}

export default ServicePage

