import Navbar from './components/views/home/Navbar';
import MainApp from './components/MainApp';
import Home from './components/views/home/Home';


import './App.css';
import Homebody from './components/views/home/Homebody';

function App() {

  return (
      <div>
          <Navbar></Navbar>
          {/* <Home></Home> */}
          <MainApp></MainApp>
          <Homebody></Homebody>
      </div>
  );
}

export default App;
