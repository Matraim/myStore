import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IPhone from '../assets/images/imgIphone/iphone-15-pro-max-select-202309-6-7inch-bluetitanium_Pkg9yKl.webp';
import IPhone2 from '../assets/images/imgIphone/iphone-15-pro-select-202309-6-7inch-blue_копия.webp';
import IPhone3 from '../assets/images/imgIphone/12-Black_Rfid3OW.webp';
import Mac from '../assets/images/imgmacbook/mbp16-spacegray-gallery1-202301_3mrg5Ao.webp';
import Mac2 from '../assets/images/imgmacbook/mbp14-silver-gallery1-202301.webp';
import Mac3 from '../assets/images/imgmacbook/mbp16-spacegray-gallery1-202301_3mrg5Ao.webp';
import Ipad from '../assets/images/imgIpad/iPad-mini-WiFi-Purple.webp';
import Whatch from '../assets/images/imgAppleWhatch/ultra-2-blue-alpine-loop3.webp';
import Whatch2 from '../assets/images/imgAppleWhatch/watch-41-pink_DH7RKN25.webp';

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
    img: IPhone,
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: Mac,
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: Ipad,
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: IPhone3,
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: IPhone2,
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: Mac3,
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: Mac2,
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: IPhone3,
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: Whatch,
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: Mac2,
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: IPhone3,
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: Mac,
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  {
    img: Whatch2,
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: Whatch2,
    title: 'Bed',
    author: 'swabdesign',
  },
];
