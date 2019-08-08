import React, { Component } from 'react';
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import PaletteFooter from './PaletteFooter'
import {Link} from 'react-router-dom'

class SingleColorPalette extends Component{
    constructor(props){
        super(props)
        this.state ={
            format : 'hex'
        }
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.changeFormat = this.changeFormat.bind(this)
    }

    gatherShades(palette, colorToFilterBy){
        let shades = []
        let allColors = palette.colors
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)
    }

    changeFormat(val){
        this.setState({
            format : val
        })
    }

    render() {
        const {format} = this.state
        const {paletteName,id, emoji} = this.props.palette
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false}
            />
        ))
        
        return (
           <div className="SingleColorPalette Palette">
               <NavBar
                    showingSlider ={false}
                    handleChange={this.changeFormat}
                />
                
                <div className="PaletteColors">
                    {colorBoxes}
                    <div className="ColorBox GoBack">
                    <Link to={`/palette/${id}`} className="GoBackButton" >
                        Go Back
                    </Link>
                    </div>
                </div>
                <PaletteFooter
                    paletteName={paletteName}
                    emoji={emoji}
                />
           </div>
        );
    }
}

export default SingleColorPalette