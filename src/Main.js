import logo from './logo.svg';
import './App';
import data from "./data.json"
import HornedBeast from './HornedBeast';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Main(props) {
  //let choice = "One"
  const [choice, setChoice] = useState(1)
  var beasts = [<HornedBeast />, <HornedBeast />]
  var filterdData = data.filter(function(element){
    console.log(element)
    if (element.horns == choice){
      return true
    }
    else {
      return false
    }
  })
  return (

    <div>
      <Form.Select onChange={function(event){
        //choice = event.target.value 
        setChoice(event.target.value)


      }} aria-label="Number of Horns Selection">
        <option>Number of Horns Selection</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="100">Hundred</option>
      </Form.Select>
      { filterdData.map((element) => {
          return <HornedBeast  setSelectedBeast={props.setSelectedBeast} updateFunction={props.updateFunction} imgurl={element.image_url} description={element.description} title={element.title} />
          })} 
          
      <h1>{props.title}</h1>
    <h1>{choice}</h1>
      
    </div>

  );
  
}

export default Main;
