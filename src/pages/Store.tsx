import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StoreImg1 from '/src/assets/images/whatch/ultra-2-blue-alpine-loop.webp';
import StoreImg2 from '/src/assets/images/Iphone/3.webp';
import StoreVideo from '../assets/video/bannerVideo.mp4';

const Store = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
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
