import React, { Component } from 'react';
import MiniPalette from './MiniPalette'
import {withStyles} from '@material-ui/styles'
import styles from './styles/PaletteListe.styles'
import {Link } from 'react-router-dom'
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Avatar from '@material-ui/core/Avatar'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'

class PaletteList extends Component{
    constructor(props){
        super(props)
        this.state = {
            openDeleteDialog : false,
            deleteId : ''
        }
    }

    openDialog = (id) => {
        this.setState({
            openDeleteDialog : true,
            deleteId : id
        })
    }
    closeDialog = () => {
        this.setState({
            openDeleteDialog : false,
            deleteId : ''
        })
    }
    goToPalette = (id) =>{
        this.props.history.push(`/palette/${id}`)
    }

    handleDelete = () =>  {
        this.props.deletePalette(this.state.deleteId)
        this.closeDialog()
    }

    render() {
        const {openDeleteDialog} = this.state
        const {palette,classes} = this.props
        return (
             <div className={classes.root}>
                 <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.title}>React Colors</h1>
                        <Link to='/palette/new'>
                            Create Palette
                        </Link>
                    </nav>
                        <TransitionGroup className={classes.palettes}>
                            {palette.map(pal => (
                                <CSSTransition
                                    key={palette.id}
                                    classNames='fade'
                                    timeout = {500}
                                >
                                    <MiniPalette 
                                        key = {palette.id}
                                        id = {palette.id}
                                        openDialog={this.openDialog}
                                        //handleDelete = {deletePalette}
                                        gotToPalette={this.goToPalette} 
                                        {...pal}/>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    
                 </div>  
                <Dialog
                    onClose={this.closeDialog}
                    aria-labelledby='delete-dialog-title'
                    open ={openDeleteDialog}
                >
                    <DialogTitle id='delete-dialog'>Delete this Palette?</DialogTitle>
                    <List>
                        <ListItem 
                            onClick = {this.handleDelete}
                            button
                            >
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color : blue[600]}}>
                                    <CheckIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Delete'/>                               
                        </ListItem>
                        <ListItem 
                            onClick={this.closeDialog}
                            button>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color : red[600]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel'/>                               
                        </ListItem>
                    </List>
                </Dialog>               
             </div>
        );
    }
}

export default withStyles(styles)(PaletteList) ;