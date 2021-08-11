import React from 'react'
import InfoBox from './InfoBox'
import './Footer.css'


const data = require('../smartMapJson.json')

function Footer() {
    
    return (
        <div className="footer">
            {data.datas.smart_map.cards.map( (card) =>( 
            <InfoBox 
            title={card.title} 
            value={card.value} 
            max={card.max}
            color={card.color}
            className="infoBox"
            />
            )
        )}
        
        </div>
    )
}

export default Footer
