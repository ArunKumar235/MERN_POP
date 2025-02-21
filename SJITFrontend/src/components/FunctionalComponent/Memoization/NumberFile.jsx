import {memo, useState} from 'react'

const NumberFile = () => {

    var initialValue = 0;
    var [num, setNum] = useState(initialValue);

    return (
        <div>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
            <button onClick={() => setNum(num+1)}>Add</button>
            <button onClick={() => setNum(num-1)}>Sub</button>
            <button onClick={() => setNum(initialValue)}>Reset</button>
        </div>
    );
}

export default memo(NumberFile);