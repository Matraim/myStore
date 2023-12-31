import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import airpodsImage from '../assets/images/imgAppleWhatch/watchOS10-Design-Templates_2x.png';
import macImage from '../assets/images/imgAppleWhatch/watchOS10-Design-Templates_2x.png';
import iphoneImage from '../assets/images/imgAppleWhatch/watchOS10-Design-Templates_2x.png';
import ipadImage from '../assets/images/imgAppleWhatch/watchOS10-Design-Templates_2x.png';

const Accessories = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Apple Accessories</h1>
      <p style={{ textAlign: 'center' }}>
        We are a fantastic company doing amazing Accessories.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingBottom: '1.5rem',
        }}
      >
        <Card style={{ maxWidth: 300 }}>
          <img src={iphoneImage} alt="iPhone" style={{ maxWidth: '100%' }} />
          <CardContent>
            <Typography variant="h5" component="div">
              iPhone
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description for iPhone.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ maxWidth: 300 }}>
          <img src={macImage} alt="Mac" style={{ maxWidth: '100%' }} />
          <CardContent>
            <Typography variant="h5" component="div">
              Mac Description
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description for Mac.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ maxWidth: 300 }}>
          <img src={airpodsImage} alt="AirPods" style={{ maxWidth: '100%' }} />
          <CardContent>
            <Typography variant="h5" component="div">
              AirPods
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description for AirPods.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ maxWidth: 300 }}>
          <img src={ipadImage} alt="iPad" style={{ maxWidth: '100%' }} />
          <CardContent>
            <Typography variant="h5" component="div">
              iPad
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description for iPad.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card style={{ maxWidth: 300 }}>
          <img src={ipadImage} alt="iPad" style={{ maxWidth: '100%' }} />
          <CardContent>
            <Typography variant="h5" component="div">
              iPad
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description for iPad.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ maxWidth: 300 }}>
          <img src={airpodsImage} alt="AirPods" style={{ maxWidth: '100%' }} />
          <CardContent>
            <Typography variant="h5" component="div">
              AirPods
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description for AirPods.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ maxWidth: 300 }}>
          <img src={iphoneImage} alt="iPhone" style={{ maxWidth: '100%' }} />
          <CardContent>
            <Typography variant="h5" component="div">
              iPhone
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description for iPhone.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ maxWidth: 300 }}>
          <img src={ipadImage} alt="iPad" style={{ maxWidth: '100%' }} />
          <CardContent>
            <Typography variant="h5" component="div">
              iPad
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description for iPad.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Accessories;
