import { React, useState } from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CachedIcon from '@material-ui/icons/Cached';
import { green } from '@material-ui/core/colors';

function Buttons({ hidden, handleClick, changeStyle }) {

    return (
        <div className="buttons">
          {hidden === true ?
           <VisibilityIcon className="fa fa-plus-circle" color="primary" style={{ fontSize: 40, color: green[500] }} 
           onClick={handleClick}
         /> 
         :
         <VisibilityOffIcon className="fa fa-plus-circle" color="primary"  style={{ fontSize: 40, color: green[500] }} 
         onClick={handleClick}
       />

        }
          <br/>  
          <CachedIcon className="fa fa-plus-circle" color="primary"  style={{ fontSize: 40, color: green[500] }} 
            onClick={changeStyle}
          />  
        </div>
    )
}

export default Buttons
