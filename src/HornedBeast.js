import logo from './logo.svg';
import './App.js';
import main from './Main'
function HornedBeast(props) {
  return (
    <section>
        {/* {console.log('hb ', props)} */}
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
      
        <img onClick={() => {
          
          props.updateFunction(true);
          props.setSelectedBeast({title: props.title, imgurl: props.imgurl, description: props.description})

        }} width="200px" src={props.imgurl} alt="Elephant" title="My Elephant is Toejoe"></img>
    </section>
  );
}

export default HornedBeast;
