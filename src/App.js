import './App.css';
import React, {  useState } from 'react'

function App() {
  const [tInput, settInput] = useState('')
  const[selectedFile, setSelectedFile] = useState(null);

  const handleTextChange = (text) => {
    settInput(text);
  }

  const handleFileChange = (x)=>{
    setSelectedFile(x)
  }

  const submitInput = (event)=>{
    event.preventDefault();
    console.log(tInput, selectedFile)
  }

  return (
    <div className="App">
      <div className = "InputField">
        <form onSubmit={submitInput} >
          <label>
            Text input:
            <input value={tInput} onChange={(e)=>{handleTextChange(e.target.value)}} type="text" name="name" /><br/>
          </label>
          <label>
            File input:
            <input type="file" onChange={(e)=>handleFileChange(e.target.files[0])} />
          </label>
          <button type='submit'>Submit</button>
        </form>

      </div>
    </div>
  );
}

export default App;
