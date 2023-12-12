import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 1200, height: 700, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/public/AirPods/aw6-hang-white-1_szbdyTq.webp',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: '/public/ipad/ipad-mini-select-wifi-space-gray-202109_fmt_whh-1200x1200 (1).jpeg',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: '/public/Iphone/3.webp',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: '/public/AirPods/190326150012817137-450x450.webp',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: '/public//Iphone/5.jpeg',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: '/public/mac/Apple-MacBook-Pro-with-Retina-Display-2020-Space-Gray.png',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: '/public/whatch/ultra-2-blue-alpine-loop.webp',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: '/public/Iphone/5.jpeg',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: '/public/whatch/ultra-2-white-ocean-band.webp',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: '/public/Iphone/product_3611_0_image-1000x1000.jpg',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: '/public/AirPods/MQD83_AV2_LZdu7LV.webp',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: '/public/mac/notebook_apple_APPMNEJ3LLA_02.webp',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/public/whatch/watch-41-stainless-gold.webp',
    title: 'Bed',
    author: 'swabdesign',
  },
  // {
  //   img: '',
  //   title: 'Books',
  //   author: 'Pavel Nekoranec',
  // },
  // {
  //   img: '',
  //   title: 'Sink',
  //   author: 'Charles Deluvio',
  // },
  // {
  //   img: '',
  //   title: 'Kitchen',
  //   author: 'Christian Mackie',
  // },
  // {
  //   img: '',
  //   title: 'Blinds',
  //   author: 'Darren Richardson',
  // },
  // {
  //   img: '',
  //   title: 'Chairs',
  //   author: 'Taylor Simpson',
  // },
  // {
  //   img: '',
  //   title: 'Laptop',
  //   author: 'Ben Kolde',
  // },
  // {
  //   img: '',
  //   title: 'Doors',
  //   author: 'Philipp Berndt',
  // },
  // {
  //   img: '',
  //   title: 'Coffee',
  //   author: 'Jen P.',
  // },
  // {
  //   img: '',
  //   title: 'Storage',
  //   author: 'Douglas Sheppard',
  // },
];
