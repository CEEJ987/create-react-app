import logo from './logo.svg';
import './App';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import SelectedBeast from './Selectedbeast';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function App() {
  const [displayselectedBeast, setdisplayselectedBeast] = useState(false)
  const [SelectedBeast, setSelectedBeast] = useState(undefined)//{title: 'test', imgurl: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg", description: 'test'})

  // let selectedBeastHtml = <SelectedBeast currentBeast={SelectedBeast} updateFunction={setdisplayselectedBeast}/>
  // if(displayselectedBeast === false){
  //   selectedBeastHtml = <></>
  // }

  return (
    <div className="App">
      <Container>

      
      <Header/>
      {displayselectedBeast && <SelectedBeast currentBeast={SelectedBeast} updateFunction={setdisplayselectedBeast}/>}
      <Main  setSelectedBeast={setSelectedBeast} updateFunction={setdisplayselectedBeast}/>
      
 
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
