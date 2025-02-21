import { useState, useCallback } from 'react';

const Callback = () => {
    var [num, setNum] = useState(0);
    var [theme, setTheme] = useState(false);

    var styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    };

    var numList = useCallback((mul) => {
        return [num + mul * 2, num + mul * 4, num + mul * 8];
    }, [num]);

    return (
        <div style={styling}>
            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
            <h1>UseCallback.jsx</h1>
            Number box: <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
            <h2>The Number list</h2>
            {numList(10).map((val, index) => (
                <h3 key={index}>{val}</h3>
            ))}
        </div>
    );
}

export default Callback;
