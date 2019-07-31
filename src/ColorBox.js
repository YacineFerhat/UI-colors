import React, { Component } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class ColorBox extends Component{
    render() {
        const{name,background } = this.props
        return (
            <CopyToClipboard text={background}>
             <div style={{background}} className='ColorBox'>
                <div className="CopyContainer">
                    <div className="BoxContent">
                        <span>{name}</span>
                    </div>
                    <button className="CopyButton"> Copy</button>
                </div>
                <span className="SeeMore">More</span>
             </div>
             </CopyToClipboard>
        );
    }
}

export default ColorBox;

