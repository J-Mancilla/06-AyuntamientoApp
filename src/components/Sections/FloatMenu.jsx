

import React from 'react'
import PropTypes from 'prop-types'

import MenuButton from '../Buttons/MenuButton'

import './FloatMenu.css'

const FloatMenu = ({menuOptions, onChangeFun}) => (
    <div className = 'floatMenu' onChange = {onChangeFun}>
        {
            menuOptions.map(({text,icon}, index) => (
                <MenuButton  text = {text} icon = {icon} index = {index}  key = {`floatMenuButton${index}`}/>
            ))
        }
    </div>
)


FloatMenu.propTypes = {
    menuOptions: PropTypes.array.isRequired,
    onChangeFun: PropTypes.func.isRequired
}

export default FloatMenu

