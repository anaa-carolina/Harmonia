import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Home from './Home'


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <main>
          <Banner />
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
