import React, { Component } from 'react';
import {ChromePicker} from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import  {withStyles} from '@material-ui/core/styles';
import styles from './styles/ColorPickerForm.styles.js';

class ColorPickerForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentColor : 'teal',
            newColorName :''
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isColorNameUnique', value=>(
            this.props.colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        )) 
        ValidatorForm.addValidationRule('isColorUnique', value=>(
            this.props.colors.every(
                ({color}) => color !== this.state.currentColor
            )
        )) 
    }

    handleSubmit(){
        const newColor = {
            color : this.state.currentColor,
            name : this.state.newColorName
        }
        this.props.addNewColor(newColor)
        this.setState({
            newColorName: ''
        })
    }
      
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value

        })
    }

    updateCurrentColor(newColor){
        this.setState({
            currentColor:newColor.hex
        })
    }

    render() {
        const {paletteIsFull, classes} = this.props
        const {currentColor, newColorName} = this.state
        return (
             <div>
                <ChromePicker 
                    className = {classes.picker}
                    color= {currentColor}
                    onChangeComplete ={this.updateCurrentColor }
                />
                <ValidatorForm
                    instantValidate={false}
                    onSubmit={this.handleSubmit}
                    ref='form'
                    >
                    <TextValidator
                        placeholder = 'Color name'
                        margin = 'normal'
                        variant = 'filled'
                        className={classes.colorName}
                        name = 'newColorName'
                        value = {newColorName}
                        onChange= {this.handleChange}
                        validators ={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['field required', 'Color name must be unique', 'Color must be unique']}
                    />
                    <Button
                        className ={classes.addColor}
                        variant ='contained'
                        color="primary"
                        type='submit'
                        disabled ={paletteIsFull}
                        style={{backgroundColor: paletteIsFull? 'grey' : this.state.currentColor}}
                        >
                            {paletteIsFull ? 'Palette Full' : 'Add color' }
                    </Button>
                </ValidatorForm>
             </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm) 