import React, { Component } from 'react';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/styles'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import styles from './styles/Navbar.styles'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state= {
            format : 'hex',
            open : false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackBack = this.closeSnackBack.bind(this)
    }

    handleFormatChange(e){
        this.setState({
            format : e.target.value,
            open : true
        })
        this.props.handleChange(e.target.value)
    }

    closeSnackBack(){
        this.setState({
            open : false 
        })
    }

    render() {
        const {showingSlider, levels, changelevel, classes} = this.props
        const {format} = this.state
        return (
            <header className={classes.NavBar}>
                <div className={classes.Logo}>
                    <Link to="/">
                        reactColorPicker
                    </Link>
                </div>
                {showingSlider &&
                <div>
                    <span>Level : {levels}</span>
                
                    <div className={classes.Slider}>
                        <Slider                     
                            step={100}
                            onAfterChange={changelevel}
                            min={100}
                            max={900}
                            defaultValue={levels} />
                    </div>
                </div>
                }
                <div className={classes.SelectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value='hex'> Hex #ffffff</MenuItem>
                        <MenuItem value='rgb'> rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>rgba(255,255,255,1)</MenuItem>
                    </Select>
                </div>
                <Snackbar   
                    open={this.state.open} 
                    autoHideDuration={3000}
                    message={<span id='MessageId'>Format Changed to {format}!</span>}
                    ContentProps={{
                        'aria-describedby' :'MessageId'
                    }}
                    onClose={this.closeSnackBack}
                    action={[
                        <IconButton 
                            color='inherit' 
                            key = 'close'
                            aria-label ='close'
                            onClick={this.closeSnackBack}> 
                            <CloseIcon/>
                        </IconButton>
                    ]}
                    anchorOrigin={{vertical : 'bottom' , horizontal: 'left'}}/>

            </header>
        );
    }
}

export default withStyles(styles)(NavBar) 