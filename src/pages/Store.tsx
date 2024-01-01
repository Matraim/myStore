import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StoreImg1 from '../assets/images/imgAppleWhatch/watchOS8-Design-Templates-small_2x.png';
import StoreImg2 from '../assets/images/imgAppleWhatch/watchOS8-Design-Templates-small_2x.png';
import StoreVideo from '../assets/images/imgAppleWhatch/watchOS8-Design-Templates-small_2x.png';

const Store = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>Store</h1>
      <p>We are a fantastic company doing amazing things.</p>

      <Slider {...sliderSettings}>
        <div>
          <img
            src={StoreImg1}
            alt="Description of the image"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: 'auto',
            }}
          />
        </div>
        <div>
          <img
            src={StoreImg2}
            alt="Description of the image"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: 'auto',
            }}
          />
        </div>
        <div>
          <img
            src={StoreImg1}
            alt="Description of the image"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: 'auto',
            }}
          />
        </div>
        <div>
          <img
            src={StoreImg2}
            alt="Description of the image"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: 'auto',
            }}
          />
        </div>
      </Slider>

      <video width="100%" controls style={{ marginTop: '20px' }}>
        <source src={StoreVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Store;
