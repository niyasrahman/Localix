import React,{useState} from 'react';


function App() {
  const changeHandler=(e)=>{
    console.log(e.target.files[0])
    var objectURL = URL.createObjectURL(e.target.files[0]);
    console.log(objectURL)
    setCount(objectURL)
  }
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <form>
        <input onChange={(e)=>changeHandler(e)} multiple type="file" accept="video/*" />
      </form>
      <video controls autoPlay src={count}/>
    </div>
  );
}

export default App;
