
import Slider from "react-slick";

function Singlepost() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
      <Slider {...settings}>
        <div className='s'>
          <img src='./clients/client-1.png' className='img-fluid h-23 w-50 mx-auto d-block'/>
        </div>
        <div>
        <img src='./clients/client-2.png' className='img-fluid h-23 w-50 mx-auto d-block'/>
        </div>
        <div>
        <img src='./clients/client-3.png' className='img-fluid h-23 w-50 mx-auto d-block'/>
        </div>
        <div>
        <img src='./clients/client-4.png' className='img-fluid h-23 w-50 mx-auto d-block'/>
        </div>
        <div>
        <img src='./clients/client-5.png' className='img-fluid h-23 w-50 mx-auto d-block'/>
        </div>
        <div>
        <img src='./clients/client-6.png' className='img-fluid h-23 w-50 mx-auto d-block'/>
        </div>
        <div>
        <img src='./clients/client-7.png' className='img-fluid h-23 w-50 mx-auto d-block'/>
        </div>
        <div>
        <img src='./clients/client-8.png' className='img-fluid h-23 w-50 mx-auto d-block'/>
        </div>
      </Slider>
    </div>
  )
}

export default Singlepost