import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
    let time = new Date()
    const [counter, setCounter] = useState(0)
    console.log(time)

    useEffect(() => {
        setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
    }, [])


  return (
    <div className="App">
        {counter}
    </div>
  );
}

export default App;
