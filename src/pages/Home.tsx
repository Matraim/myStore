import TitlebarBelowMasonryImageList from '../components/TitlebarBelowMasonryImageList';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website! you can order apple products</p>

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
