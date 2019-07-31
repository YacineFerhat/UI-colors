import React, { Component } from 'react';
import ColorBox from './ColorBox'
import './Palette.css'

class Palette extends Component{
    render() {
        const colorBoxes = this.props.colors.map(color=>(
            <ColorBox name={color.name} background={color.color}/>
        ))
        return (
             <div className="Palette">
                 {/*  Navbar */ }
                 <div className="PaletteColors">
                    {colorBoxes}
                 </div>
             </div>
        );
    }
}

export default Palette