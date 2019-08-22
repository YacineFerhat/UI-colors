import React from 'react';
import {withStyles} from '@material-ui/styles'
import styles from './styles/MiniPalette.styles'

function MiniPalette (props){
    const {classes,colors, paletteName, emoji } = props
    const miniColorsBoxes = colors.map(color => (
        <div 
            style={{backgroundColor:color.color}} 
            className={classes.miniColor}
            key ={color.name}
            >
            
        </div>
    ))
    return(
       <div className={classes.root} onClick={props.handleClick} >
           <div className={classes.colors}>
               {miniColorsBoxes}
           </div>
           <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
           </h5>
       </div>
    ) 
}

export default withStyles(styles)(MiniPalette)