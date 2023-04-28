import logo from './logo.svg';
import './App';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import SelectedBeast from './Selectedbeast';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import SelectHorns from './Beastfilter';



function App() {
  const [displayselectedBeast, setdisplayselectedBeast] = useState(false)
  const [selectedBeast, setSelectedBeast] = useState(undefined)

  return (
    <div className="App">
      <Container>
      <Header/>
      
      {displayselectedBeast == true ? <SelectedBeast currentBeast={selectedBeast} updateFunction={setdisplayselectedBeast}/> : <></>}
      <Main  setSelectedBeast={setSelectedBeast} updateFunction={setdisplayselectedBeast}/>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;