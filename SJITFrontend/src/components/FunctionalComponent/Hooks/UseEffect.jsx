import {useEffect, useState} from "react";

const UseEffect = () => {
    
    var [text, setText] = useState("");
    var [text1, setText1] = useState("");
    
    useEffect(() => {
        console.log(text);
    }, [text]);
    
    useEffect(() => {
        console.log(text1);
    }, [text1]);
    
    
    return  (
        <section>
            <h2>This is useEffect example</h2>
            <h3>You have typed: {text}</h3>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        
            <h3>You have typed: {text1}</h3>
            <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} />
        </section>
    );
}

export default UseEffect;