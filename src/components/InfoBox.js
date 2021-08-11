import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"

function InfoBox({title, value, max, color }) {
    return (
        <Card className="infoBox" style={{backgroundColor: color}}>
            <CardContent>
               <Typography className="infoBox_title" color="textSecondary">
                {title}
               </Typography>

               <h2 className="infoBox_cases">value: {value}</h2> 

               <Typography className="infoBox_total" color="textSecondary">
                   max: {max} 
               </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
