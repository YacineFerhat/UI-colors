import chroma from 'chroma-js'

export default { 
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
  