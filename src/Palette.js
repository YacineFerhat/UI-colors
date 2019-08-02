import React, { Component } from 'react';
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import './Palette.css'


class Palette extends Component{
    constructor(props){
        super(props)
        this.state= {levels : 500 , format : "hex"}
        this.changelevel=this.changelevel.bind(this)
        this.changeFormat= this.changeFormat.bind(this)
    }
    
    changelevel(levels){
        this.setState({
             levels
        })
    }

    changeFormat(val){
        this.setState({
            format : val
        })

    }

    render() {
    
        const { colors,emoji, paletteName } = this.props.palette;
        const { levels, format} = this.state;
        const colorBoxes = colors[levels].map(color => (
          <ColorBox key={color.id } background={color[format]} name={color.name} />
        ));

        return (
             <div className="Palette">
                 <NavBar
                    handleChange={this.changeFormat}
                    levels ={levels}
                    changelevel = {this.changelevel}
                 />
               
                 <div className="PaletteColors">
                    {colorBoxes}
                 </div>
                 <footer className="PaletteFooter">
                    {paletteName}
                    <span className="emoji">
                        {emoji}
                    </span>
                 </footer>
             </div>
        );
    }
}

export default Palette