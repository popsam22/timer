import React, {useState} from 'react'

const Clock = (props) => {

    const defaultTime = new Date().toLocaleTimeString()

    const [timer, setTimer] = useState(defaultTime);
    const timerhandler=() =>{
        setTimer(new Date().toLocaleTimeString())
    }

    setInterval(timerhandler, 1000)

  return (
    <div>
        <h1>{timer}</h1>
        <button onClick={timerhandler}>Set time</button>
    </div>
  )
}

export default Clock