import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PaletteList extends Component{
    render() {
        const {palette} = this.props
        return (
             <div>
                 <h1>Palette List</h1>
                 {palette.map(pal => (
                     <p>
                     <Link to= {`/palette/${pal.id}`}>
                        {pal.paletteName}
                     </Link> 
                     </p>
                 ))}
             </div>
        );
    }
}

export default PaletteList;