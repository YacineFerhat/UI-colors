import sizes from './sizes'

export default {
    NavBar : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh'
    },
    
    Logo : {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'Roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a' : {
            textDecoration: 'none',
            color: 'black'
        },
        [sizes.down('xs')]:{
            display : 'none'
        }
    },
    
    Slider : {
        width:  '340px',
        margin: '0 10px',
        display: 'inlineBlock',
        '& rc-slider-track ':{
            backgroundColor: 'transparent'
        },
        "& rc-slider-handle, rc-slider-handle:active, rc-slider-handle:hover, rc-slider-handle:active":{
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px'
        },
        'a rc-slider-rail' :{
            height: '8px'
        },
        [sizes.down('sm')]:{
            width : '150px'
        }
    },

    SelectContainer :{
        marginLeft: 'auto',
        marginRight: '1rem'
    }
}
