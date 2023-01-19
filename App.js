import './App.css';
import {useState} from 'react';
import Welcome from './components/Welcome';

function App() {
    const [name , setName] = useState("")
    const [submit , setSubmit] = useState(false)


    return (

        <div>
          <div>
            <label>Name</label>
            <input
            placeholder ="Enter Your Name"
            value ={name}
            onChange={(event)=>{setName(event.target.value)}}></input>
          </div> 

            <div><button onClick={()=>{setSubmit(!submit)}}>Submit</button> </div>

            {(submit && name) && <Welcome name={name}></Welcome>}

            <p>this assigment is done by saurabh kumar(12016490)</p>
        

        </div>

        
    );

}

export default App;