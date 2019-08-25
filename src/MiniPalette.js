import React, { PureComponent } from 'react';
import {withStyles} from '@material-ui/styles'
import styles from './styles/MiniPalette.styles'
import DeleteIcon from '@material-ui/icons/Delete'

class MiniPalette extends PureComponent{
    
    deletePalette = (e) => {
        e.stopPropagation()
        this.props.openDialog(this.props.id)
    }

    handleClick = () => {
        this.props.gotToPalette(this.props.id)   
    }
    render (){
        const {classes,colors, paletteName, emoji } = this.props
        const miniColorsBoxes = colors.map(color => (
        <div 
            style={{backgroundColor:color.color}} 
            className={classes.miniColor}
            key ={color.name}
            >
            
        </div>
        ))
        return(
        <div className={classes.root} onClick={this.handleClick} >
                    <DeleteIcon 
                        onClick={this.deletePalette}
                        className={classes.deleteIcon} 
                        style={{transition : 'all 0.3s ease-in-out'}}/>
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
}

export default withStyles(styles)(MiniPalette)