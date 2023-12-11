import TitlebarBelowMasonryImageList from '../components/TitlebarBelowMasonryImageList';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Home Page</h1>
      <p style={{ textAlign: 'center' }}>
        Welcome to our website! you can order apple products
      </p>

      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <TitlebarBelowMasonryImageList />
      </div>
    </div>
  );
};

export default Home;
