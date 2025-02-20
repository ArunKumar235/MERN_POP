import {useState, useEffect, useRef} from 'react';

const UseRef = () => {

    var [text, setText] = useState("");

    var previousRender = useRef();

    useEffect(() => {
        previousRender.current = text;      
    }, [text])

  return (
    <div>
        <h1>UseRef.jsx</h1>
        Type your text: <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <h2>The current render text is {text}</h2>
        <h3>The previous render text is {previousRender.current}</h3>
    </div>
  );
}

export default UseRef;