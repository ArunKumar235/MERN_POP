import {memo, useState} from 'react'

const TextFile = () => {

    var [text, setText] = useState("");
    
    return (
        <div>
            <h2>You have typed: {text}</h2>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
        </div>
    );
}

export default memo(TextFile);