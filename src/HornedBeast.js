import logo from './logo.svg';
import './App.js';
import main from './Main'
import { useState } from 'react'
function HornedBeast(props) {
  const [imageLiked, setimagelikes] = useState(false)
  const [likes, setLikes] = useState(0)
  let heart = "🖤"
  heart = imageLiked ? '❤️' : heart
  

  return (
    <section>
        {/* {console.log('hb ', props)} */}
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
        <h1 onClick={(function () {
          setLikes(likes+1)
          setimagelikes(true)
        })}>{heart}</h1>
        <h3 onClick={(function (){
          setLikes(likes+1)
        })}>{likes}</h3>
      
        <img onClick={() => {
          
          props.updateFunction(true);
          props.setSelectedBeast({title: props.title, imgurl: props.imgurl, description: props.description})

        }} width="200px" src={props.imgurl} alt="Elephant" title="My Elephant is Toejoe"></img>
    </section>
  );
}

export default HornedBeast;
