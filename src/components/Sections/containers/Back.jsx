import React from 'react'
import PropTypes from 'prop-types'

import './Back.css'

const Back = ({styles, title, subtitle}) => {

    const { container, background, sub, img, tit } = styles;
    return (
        <div className = 'backSection' style = {container} >
            <div className = 'back'  style = {background}></div>
            <h4  className = 'sub'   style = {sub}>{subtitle}</h4>
            <div className = 'img' style = {img}></div>
            <h3  className = 'tit' style  = {tit}>{title}</h3>
        </div>
    )
}




Back.propTypes = {
    styles:   PropTypes.object.isRequired,
    title:    PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

export default Back
