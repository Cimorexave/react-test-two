import React, {useState, useEffect} from 'react';
import Welcome from '../components/Welcome';
// import {Welcome} from '../components/index';
import "../styles/loading.module.css";

const Loading = () => {
    //states
    const [welcoming, setWelcoming] = useState<boolean>(true)
    //lifecycle management
    useEffect(() => {
        setTimeout(() => {setWelcoming(false)}, 10000)
    }, [])

  return (
    <div className='loading'>
        {welcoming ? <Welcome /> : "" }
        <video src=".../public/fotage razak.mp4" controls >
            <p>Your browser doesn't support this video format...</p>
        </video>
    </div>
  )
}

export default Loading