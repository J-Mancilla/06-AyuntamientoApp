import React from 'react'
import PropTypes from 'prop-types'

const Back = ({styles, title, subtitle}) => {

    const { container, background, sub, img, tit } = styles;
    return (
        <div style = {container} >
            <div style = {background}></div>
            <h4  style = {sub}>{subtitle}</h4>
            <div style = {img}></div>
            <h3 style  = {tit}>{title}</h3>
        </div>
    )
}




Back.propTypes = {
    styles:   PropTypes.object.isRequired,
    title:    PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

export default Back
