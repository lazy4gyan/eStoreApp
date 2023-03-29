import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { CAROUSEL_DATA } from '../../utils/constants';
  
  function CarouselComponent() {
    return (
      <Carousel>
        {CAROUSEL_DATA.map((item, index) => (
          <CarouselItem key={index}>
            <img className="d-block w-100" src={item.src} alt={item.alt} style={{height:"70vh"}} />
          </CarouselItem>
        ))}
      </Carousel>
    );
  }

  export default CarouselComponent;
  