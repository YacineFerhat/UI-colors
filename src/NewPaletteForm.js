import React, { Component } from 'react';
import classNames from 'classnames'
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './ColorPickerForm'
import  {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList'
import { arrayMove } from 'react-sortable-hoc';
import styles from './styles/NewPaletteForm.styles.js'
class newPaletteForm extends Component{
    static defaultProps = {
        maxColors : 20
    }
    constructor(props){
        super(props)
        this.state = {
            open: false,
            colors : this.props.palettes[0].colors
        }
        this.removeColor= this.removeColor.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.addNewColor= this.addNewColor.bind(this)
        this.handleChange= this.handleChange.bind(this)
        this.clearColors= this.clearColors.bind(this)
        this.addRandomColor = this.addRandomColor.bind(this)
    }

    handleDrawerOpen = () =>  {
        this.setState({
            open : true}
        )
      }
    
    handleDrawerClose = () => {
        this.setState({
            open : false
        })
      }

      
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value

        })
    }

    addNewColor (newColor){
        this.setState({
             colors : [...this.state.colors, newColor], 
             newColorName :''
        })
    }

    removeColor(colorName){
        this.setState({
            colors : this.state.colors.filter(color => color.name!==colorName)
        })
    }
    

    handleSubmit(newPalette){
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g,'-')         
        newPalette.colors = this.state.colors
        
        this.props.savePalette(newPalette)
        this.props.history.push('/')
    }

    onSortEnd = ({oldIndex, newIndex})=> {
        this.setState(({colors}) => ({
            colors : arrayMove(colors,oldIndex,newIndex)
        }))
    }
    
    clearColors(){
        this.setState({
            colors : []
        })
    }

    addRandomColor(){
        const allColors = this.props.palettes.map (p=> p.colors).flat()
        var rand = Math.floor(Math.random() * allColors.length)
        const randomColor = allColors[rand]
        this.setState({
            colors : [...this.state.colors, randomColor]
        })
    }

 render() {  
        const {classes, theme,palettes, maxColors} = this.props
        const {open, colors} = this.state
        const paletteIsFull = colors.length>= maxColors

      
        return (
            <div className={classes.root}>
            <PaletteFormNav
                handleSubmit={this.handleSubmit}
                handleDrawerOpen={this.handleDrawerOpen}
                palettes={palettes}
                open={open}
            />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <Divider />
                <div className={classes.container}> 
                    <Typography
                        variant='h5'
                        gutterBottom>
                            Design your Palette
                    </Typography>
                    <div className={classes.buttons}>
                        <Button
                            className={classes.button}
                            variant ='contained'
                            color='secondary'
                            onClick= {this.clearColors}
                            >
                                Clear Palette
                        </Button>
                        <Button
                            className={classes.button}
                            variant ='contained'
                            color="primary"
                            onClick ={this.addRandomColor}
                            disabled ={paletteIsFull}
                            >
                                Random color
                        </Button>
                </div>
                <ColorPickerForm
                        colors = {colors}
                        paletteIsFull={paletteIsFull}
                        addNewColor = {this.addNewColor}
                        />

               </div>
            </Drawer>
            <main
                className={classNames(classes.content, {
                [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <DraggableColorList
                    colors = {this.state.colors}
                    removeColor= {this.removeColor }
                    axis='xy'
                    onSortEnd = {this.onSortEnd}
                />
            </main>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(newPaletteForm)
