import { React, useState } from 'react'
import InfoBox from './InfoBox'
import './Footer.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { green } from '@material-ui/core/colors'
const data = require('../smartMapJson.json')

function Footer() {
    
    const [hidden, setHidden] = useState(false)

    const handleClick = () =>{
        setHidden(!hidden)
    }

    return (
        <div className="footer">
            {hidden === false ? 
                data.datas.smart_map.cards.map( (card) =>( 
                    <InfoBox 
                    title={card.title} 
                    value={card.value} 
                    max={card.max}
                    color={card.color}
                    className="infoBox"
                    />
                    
                    )
                )
                :
                <p></p>
            }
        
        {hidden===false?
            <VisibilityIcon className="fa fa-plus-circle" color="primary"  style={{ fontSize: 40 }} 
            onClick={handleClick}
            className="visibility"
            style={{ fontSize: 40, color: green[500] }}
            /> 
            :
            <VisibilityOffIcon className="fa fa-plus-circle" color="primary"  style={{ fontSize: 40 }} 
            onClick={handleClick}
            className="visibility"
            style={{ fontSize: 40, color: green[500] }}
            /> 
        } 
        
        </div>
    )
}

export default Footer
