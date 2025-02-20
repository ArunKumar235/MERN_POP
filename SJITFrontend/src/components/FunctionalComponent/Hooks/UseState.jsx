import {useState} from 'react';

const UseState = () => {

    var initialValue = 0;
    var [num, setNum] = useState(initialValue);

    return (
        <div>
            <h1>UseState.jsx</h1>
            <h2>State initial value: {initialValue}</h2>
            <h3>Updating State: {num}</h3>            
            <button onClick={()=>setNum(num+1)}>Add</button>  {/* Callback Function is passed to onClick */}
            <button onClick={()=>setNum(num-1)}>Sub</button>
            <button onClick={()=>setNum(initialValue)}>Reset</button>

        </div>
    );
}

export default UseState;