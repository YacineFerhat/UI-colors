import React, { Component } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from 'chroma-js'
import {withStyles} from '@material-ui/styles'

const styles={ 
  CopyText:{
    color : props =>
     chroma(props.background).luminance() >= 0.7 ? 'black' :'white'
  },
  colorName : {
    color : props => 
     chroma(props.background).luminance() <= 0.1 ? 'white' :'black'
  }
}

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
        
        const { name, classes, showLink, background, moreUrl} = this.props;
        const { copied } = this.state;
        const isDark =chroma(background).luminance() <=0.1
        const isLight =chroma(background).luminance() >=0.6 
        return (
          <CopyToClipboard text={background}  onCopy={this.changeCopyState}>
            <div style={{ background }} className='ColorBox'>
              <div
                style={{ background }}
                className={`CopyOverlay ${copied && "show"}`}
              />
              <div className={`CopyMsg ${copied && "show"}`}>
                <h1>copied!</h1>
                <p className={classes.CopyText}>{this.props.background}</p>
              </div>
              <div className='CopyContainer'>
                <div className='BoxContent'>
                  <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={`CopyButton ${isLight && 'DarkText'}`}> Copy</button>
                </div>
                {showLink && 
                <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                  <span className={`SeeMore ${isLight && 'DarkText'}`}>MORE</span>
                </Link>
                }
             </div>
             </CopyToClipboard>
        );
    }
}
export default withStyles(styles)(ColorBox);