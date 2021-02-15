import './App.css';
import Different from './components/Different/Different';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      <Different />
      <Footer />
    </div>
  );
}

export default App;
