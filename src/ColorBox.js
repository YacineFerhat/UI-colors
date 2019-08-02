import React, { Component } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class ColorBox extends Component{
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
      }
    
    changeCopyState() {
        this.setState({ copied: true }, () => {
          setTimeout(() => this.setState({ copied: false }), 1500);
        });
      }

      render() {
        const { name, background } = this.props;
        const { copied } = this.state;
        return (
          <CopyToClipboard text={background}  onCopy={this.changeCopyState}>
            <div style={{ background }} className='ColorBox'>
              <div
                style={{ background }}
                className={`CopyOverlay ${copied && "show"}`}
              />
              <div className={`CopyMsg ${copied && "show"}`}>
                <h1>copied!</h1>
                <p>{this.props.background}</p>
              </div>
              <div className='CopyContainer'>
                <div className='BoxContent'>
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

