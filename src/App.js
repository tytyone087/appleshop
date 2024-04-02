import Navbar from "./components/Navbar";
import  "./App.scss";
import {Route, Routes} from 'react-router-dom'
// import Main from './pages/Main'
import Store from './pages/Store'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/store" element={<Store />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
