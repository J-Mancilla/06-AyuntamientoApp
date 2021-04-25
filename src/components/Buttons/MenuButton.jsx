import React from 'react'
import PropTypes from 'prop-types'

import './MenuButton.css'

const MenuButton = ({ text, icon, index}) => (
        // <button 
        //         className = 'menuButton' 
        //         onClick= {() =>{
        //             clickHandler();
        //         }}
        // >
        //     {text}
        //     {icon}
        // </button>
        
        <label className = 'menuLabel'>
            <input className = 'inputMenu' type="radio" name="floatMenu" value = {index} defaultChecked = {index===0 ? true : false}/>
            {icon}
            <p>{text}</p>
        </label>
)


MenuButton.propTypes = {
    text:          PropTypes.string.isRequired,
    icon:          PropTypes.object.isRequired,
    index:       PropTypes.number.isRequired
}

export default MenuButton
