import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { HashRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
          <Route path="/" exact component={About} />
          <Route path="/projects" exact component={Portfolio} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
