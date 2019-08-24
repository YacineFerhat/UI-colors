import React from 'react';
import {withStyles} from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import {SortableElement} from 'react-sortable-hoc'
import styles from './styles/DraggableColorBox.styles.js'

function DraggableColorBox({color, name, classes,handleClick}){
    return(
        <div 
            className={classes.root}
            style={{backgroundColor: color}}>
                <div className={classes.boxContent}>
                    <span>
                        {name}
                    </span>
                    <span>
                        <DeleteIcon 
                            onClick = {handleClick}
                            className={classes.deleteIcon}/>
                    </span>
                </div>
        </div>

    )
}

export default SortableElement(withStyles(styles)(DraggableColorBox))