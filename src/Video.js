import React,{useState} from 'react';

function Video({count}) {
 
  return (
      <video controls autoPlay src={count}/>
  );
}

export default Video;