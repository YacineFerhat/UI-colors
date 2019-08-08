import React, { Component } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from 'chroma-js'
import {withStyles} from '@material-ui/styles'

const styles={ 
  ColorBox:{
    width: '20%',
    height: props => props.showingFullPalette? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor:  'pointer',
    marginBottom: '-3.5px',
    '&:hover button':{
      opacity : 1 
    }
  },
  CopyOverlay:{
    opacity: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    transform: 'scale(0.1)', 
    transition: 'transform 0.6s ease-in-out'
  },
  ShowOverlay: {
    zIndex: 10,
    opacity: 1,
    transform: 'scale(50)',
    position: 'absolute'
  },

  CopyMessage :{
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top : 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: 'white',
    flexDirection: 'column',
    '& h1':{
      fontWeight: 400,
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',    
      width: '100%',
      textAlign: 'center',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },

    '& p':{
      fontWeight: 100,
      fontSize: '2rem'
  }

  },

  ShowMessage :{
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 25,
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.2s'
  },

  BoxContent :{
    position: 'absolute',
    padding: '10px',
    width: '100%',
    bottom: '0px',
    left: '0px ',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'

  },
  CopyText:{
    color : props =>
     chroma(props.background).luminance() >= 0.7 ? 'black' :'white'
  },
  colorName : {
    color : props => 
     chroma(props.background).luminance() <= 0.1 ? 'white' :'black'
  },
  SeeMore :{
    color: props => 
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: "30px",
    textTransform: 'uppercase'
  },
  CopyButton :{
    color: props => 
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
    width: '100px',
    height: '30px',
    opacity : 0,
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
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
        
        const { name, classes, showingFullPalette, background, moreUrl} = this.props;
        const { copied } = this.state; 

        return (
          <CopyToClipboard text={background}  onCopy={this.changeCopyState}>
            <div style={{ background }} className={classes.ColorBox}>
              <div
                style={{ background }}
                className={`${classes.CopyOverlay} ${copied && classes.ShowOverlay }`}
              />
              <div className={`${classes.CopyMessage} ${copied && classes.ShowMessage}`}>
                <h1>copied!</h1>
                <p className={classes.CopyText}>{this.props.background}</p>
              </div>
              <div>
                <div className={classes.BoxContent}>
                  <span className={classes.colorName}>{name}</span>
                </div>
                <button className={classes.CopyButton}> Copy</button>
              </div>
                {showingFullPalette && 
                <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                  <span className={classes.SeeMore}>MORE</span>
                </Link>
                }
             </div>
             </CopyToClipboard>
        );
    }
}
export default withStyles(styles)(ColorBox); 