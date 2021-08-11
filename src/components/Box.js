import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import './Box.css'
function Box() {
    return (
        <Card className="infoBox box">
            <CardContent>
               <Typography className="infoBox_title" color="textSecondary">
                Title
               </Typography>

               <h2 className="infoBox_cases">Some data</h2> 

               <Typography className="infoBox_total" color="textSecondary">
                   Random Data 
               </Typography>
            </CardContent>
        </Card>
    )
}

export default Box;
