import React, { Component } from 'react';
import MiniPalette from './MiniPalette'
import {withStyles} from '@material-ui/styles'
import styles from './styles/PaletteListe.styles'
import {Link } from 'react-router-dom'

class PaletteList extends Component{

    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }

    render() {
        const {palette,classes} = this.props
        return (
             <div className={classes.root}>
                 <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new'>
                            Create Palette
                        </Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palette.map(pal => (

                            <MiniPalette 
                                handleClick={() => this.goToPalette(pal.id)} 
                                {...pal}/>
                        ))}
                    </div>
                 </div>                 
             </div>
        );
    }
}

export default withStyles(styles)(PaletteList) ;