import React, {useState, useEffect} from 'react';
import ExploreButton from '../components/ExploreButton';
import Welcome from '../components/Welcome';
// import {Welcome} from '../components/index';
import "../styles/loading.module.css";

const Loading = () => {
    //states
    const [welcoming, setWelcoming] = useState<boolean>(true)
    //lifecycle management
    useEffect(() => {
        setTimeout(() => {setWelcoming(false)}, 5000)
    }, [])

  return (
    <div className='loading'>
        {welcoming ? <Welcome /> : "" }
        <ExploreButton />
        <video src={require("../assets/footage-razak.mp4")} 
        controls autoPlay muted loop >
            <p>Your browser doesn't support this video format...</p>
        </video>
    </div>
  )
}

export default Loading