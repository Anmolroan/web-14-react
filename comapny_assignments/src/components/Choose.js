import React from 'react'
import {Image,Header,Desc} from './Choose.module';
import {VscVerified} from "react-icons/vsc";
function Choose({image,header,desc}) {
  return (
    <div>
    <Image><VscVerified></VscVerified></Image>
    
        
        <Header>{header}</Header>
        <Desc>{desc}</Desc>
    </div>
  )
}

export default Choose