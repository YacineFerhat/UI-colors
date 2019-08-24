import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

class PopUpp extends Component {
    constructor(props){
        super(props)
        this.state={
            stage : 'form',
            newPaletteName : ''
        }
        this.handleChange= this.handleChange.bind(this)
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', value=>(
            this.props.palettes.every(
                ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        )) 
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value

        })
    }

    handleClickOpen=() => {
        this.setState({
            open: true
        })
    }

    handleClose = () =>  {
        this.setState({
            open: false
        })
    }

    showEmoji = () => {
        this.setState({
            stage : 'emoji'
        })
    }
    savePalette= (emoji) => {
        const newPalette = {
            paletteName : this.state.newPaletteName,
            emoji : emoji.native
        }
        this.props.handleSubmit(newPalette)
    }
    render(){
        const {newPaletteName,stage} = this.state
        const {hideForm} = this.props
        return (
            <div>
            <Dialog 
                onClose={hideForm}
                open = {stage === 'emoji'}>
                <DialogTitle id="form-dialog-title">Palette Emoji Picker</DialogTitle>
                <Picker 
                    title='Pick an Emoji!'
                    onSelect={this.savePalette}/>
            </Dialog> 
            <Dialog 
                open={stage === 'form'} 
                onClose={hideForm} 
                aria-labelledby="form-dialog-title">
                
                <DialogTitle id="form-dialog-title">Palette Name Picker</DialogTitle>
                <ValidatorForm onSubmit={this.showEmoji}>
                <DialogContent>
                <DialogContentText>
                    Please enter a name for your new palette. 
                </DialogContentText>
                    <TextValidator
                        fullWidth
                        margin = 'normal'
                        value = {newPaletteName}
                        label = 'Palette Name'
                        onChange ={this.handleChange}
                        name = 'newPaletteName'
                        validators={['required','isPaletteNameUnique']}
                        errorMessages={['Enter Palette Name','Palette Name already used']}
                    />
                  
                    
                </DialogContent>
                <DialogActions>
                <Button
                        variant='contained'
                        color='primary'
                        type = 'submit'
                        >
                        Save Palette
                </Button>
                <Button onClick={hideForm} color="primary">
                    Cancel
                </Button>
                </DialogActions>
                </ValidatorForm>
            </Dialog>
            </div>
        );
    }
}




export default PopUpp;