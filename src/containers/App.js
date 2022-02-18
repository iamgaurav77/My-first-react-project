import React, {useState} from 'react';
import './App.css';
import Op from '../components/op';


const App = () => {
  
  const[count,setCount] = useState(0);

  const solve = () => {
    setCount(count+1);
  };

  const solve2 = () => {
    if(count>0){
     setCount(count-1);
    }
    else{
      setCount(count+0);
    }
  };

    return (
        <div className="App">
       <h1>My first react project</h1>    
       <div className= "crd">
       <p className="crd2">{count}</p>
       <Op name="increase" st="buttonStyle" Click={solve}/>
       <Op name="decrease" st="buttonStyle2" Click={solve2}/>
       </div>
      </div>
    )
};


export default App;
