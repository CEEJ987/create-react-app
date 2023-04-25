import logo from './logo.svg';
import './App';
import data from "./data.json"
import HornedBeast from './HornedBeast';
function Main(props) {
  var beasts = [<HornedBeast />, <HornedBeast />]
  var moreBeasts = data.map(function (element) {
    return <HornedBeast imgurl={element.image_url} description={element.description} title={element.title} />
  })
  return (

    <div>
      {/* { <HornedBeast  updateFunction={props.updateFunction}/> } */}
      {/* {moreBeasts} console.log('main ', props)*/}
      { data.map((element) => {
          return <HornedBeast  setSelectedBeast={props.setSelectedBeast} updateFunction={props.updateFunction} imgurl={element.image_url} description={element.description} title={element.title} />
          })} 
      <h1>{props.title}</h1>
    </div>

  );
}

export default Main;
