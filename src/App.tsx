import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MianRoutes from './routes/MianRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <MianRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
