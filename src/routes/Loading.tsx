import React from 'react';
import "../styles/loading.module.css";

const Loading = () => {
  return (
    <div>
        <video src=".../public/fotage razak.mp4" controls >
            <p>Your browser doesn't support this video format...</p>
        </video>
    </div>
  )
}

export default Loading