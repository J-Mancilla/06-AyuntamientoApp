import React from 'react'
import './Header.css'
import LinkButton from './LinkButton'


const Header = () => (
        <header>
            <div className = 'logo'></div>
            <div className = 'btnsHead'>
                <LinkButton  text = 'Tu Gobierno'/>
                <LinkButton  text = 'Tu Municipio'/>
                <LinkButton  text = 'Trámites'/>
                <LinkButton  text = 'Servicios'/>
            </div>
            
        </header>
    )


export default Header
