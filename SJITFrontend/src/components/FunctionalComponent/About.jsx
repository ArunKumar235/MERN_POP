import { useState } from 'react';

function About() {

    var initialValue = 0;

    var [num, setNum] = useState(initialValue);
    
    var [str, setStr] = useState("Hello");

    return (
        <div>
            <h1>About</h1>
            <h2>State initial value: {initialValue}</h2>
            <h3>Updating State: {num}</h3>            
            <button onClick={()=>setNum(num+1)}>Add</button>  {/* Callback Function is passed to onClick */}
            <button onClick={()=>setNum(num-1)}>Sub</button>
            <button onClick={()=>setNum(initialValue)}>Reset</button>

            <h2>State initial value: Hello</h2>
            <h3>Updating State: {str}</h3>
            <input type="text" value={str} onChange={(event) => setStr(event.target.value)} />

        </div>
    );
}

export default About;