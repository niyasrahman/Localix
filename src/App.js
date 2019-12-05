import React,{useState} from 'react';
import Video from './Video'


function App() {
  const changeHandler=(e)=>{
    console.log(e.target.files[0])
    var objectURL = URL.createObjectURL(e.target.files[0]);
    
    setCount(objectURL)
   
  }
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
     {count ? <div/> : 
     <div>
      <form>
      <div className="upload-btn-wrapper">
      <button className="btn">Upload a file</button>
        <input onChange={(e)=>changeHandler(e)} multiple type="file" accept="video/*" />
      </div>
      </form>
    </div>
     
      }
    
      {count ? <Video count={count} /> : <div/>}
      
    </React.Fragment>
  );
}

export default App;
