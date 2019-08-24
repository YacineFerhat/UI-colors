import React, { Component } from 'react';
import classNames from 'classnames'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import  {withStyles} from '@material-ui/core/styles';
import PopUpp from './PopUpp'
import {Link} from 'react-router-dom'
import styles from './styles/PaletteFormNav.styles.js'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos'

class PaletteFormNav extends Component{
    constructor(props){
        super(props)
        this.state ={
            formShowing :  false ,
            newPaletteName : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.showForm = this.showForm.bind(this)
    }
 
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value

        })
    }
    hideForm = () => {
        this.setState({
            formShowing : false
        })
    }

    showForm (){
        this.setState({
            formShowing : true
        })   
    }
    render() {
        const {classes, open, palettes, handleSubmit } = this.props
        return (
             <div className={classes.root}>
                   <CssBaseline />
                    <AppBar
                        color='default'
                        position="fixed"
                        className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.props.handleDrawerOpen}
                            edge="start"
                            className={classNames(classes.menuButton,{[classes.hide]:open})}
                        >
                            <AddToPhotosIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Create a Palette
                        </Typography>
                        
                        </Toolbar>
                        
                        <div className={classes.navBtn}>
                           
                             <Button 
                                className ={classes.button}
                                variant="contained" 
                                color="primary" 
                                onClick={this.showForm}>
                                    Save
                            </Button>
                           <Link to='/'>
                                <Button
                                    className ={classes.button}
                                    variant='contained'
                                    color='secondary'
                                    >
                                    Go back
                                </Button>
                            </Link>
                        </div>
                    </AppBar>
                    {this.state.formShowing && 
                            <PopUpp
                                hideForm = {this.hideForm}
                                palettes ={palettes}
                                handleSubmit = {handleSubmit}
                                />}
             </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav)
