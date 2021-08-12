import { React, useState } from 'react'
import Box from './Box'
import './Boxes.css'
import Buttons from './Buttons'

function Boxes({ changeStyle }) {

    const [hidden, setHidden] = useState(false)
    
    const handleClick = () =>{
        setHidden(!hidden)
    }
    return (
        <div className="all">
            {hidden === false ?
            <div className="boxes">
                <Box />
            </div>
            :
            <p></p>
        }
            
            <Buttons hidden={hidden} handleClick={handleClick} changeStyle={changeStyle}  className="buttons"/>
        </div>
    )
}

export default Boxes
