import logo from './logo.svg';
import './App';
import data from "./data.json"
import HornedBeast from './HornedBeast';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main(props) {
  var beasts = [<HornedBeast />, <HornedBeast />]
  var moreBeasts = data.map(function (element) {
    return <HornedBeast imgurl={element.image_url} description={element.description} title={element.title} />
  })
  return (

    <div>
      <Form.Select aria-label="Number of Horns Selection">
        <option>Number of Horns Selection</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      { data.map((element) => {
          return <HornedBeast  setSelectedBeast={props.setSelectedBeast} updateFunction={props.updateFunction} imgurl={element.image_url} description={element.description} title={element.title} />
          })} 
      <h1>{props.title}</h1>
      
    </div>

  );
  
}

export default Main;
