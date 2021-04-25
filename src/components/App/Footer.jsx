import React from 'react'

import LinkBtn from '../Buttons/LinkBtn'

import './Footer.css'

const Footer = () => (
        <footer>
            <div className = 'above'>
                <div className = 'boldOptions'>
                    {boldOpc.map((text, index) => (
                        <LinkBtn text = {text} bold = {true} key = {`opcBoldFoot${index}`}  />
                    ))}
                </div>
            </div>
            <div>
                <div className = 'options1'>
                    {options.map((text, index) => (
                        <LinkBtn text = {text} key = {`opc1Foot${index}`}  />
                    ))}
                </div>
                <div className = 'options2'>
                    {options2.map((text, index) => (
                        <LinkBtn text = {text} key = {`opc2Foot${index}`}  />
                    ))}
                </div>
            </div>
        </footer>
    );

const boldOpc  = ['Ayuda', 'Contáctanos', 'Inicio', 'Tu Municipio', 'Trámites y servicios', 'Transparencia', 'LGCG', 'Prensa'];
const options  = ['Obras públicas', 'SAPA', 'DIF', 'Tesorería', 'Sindicatura'];
const options2 = ['© 2021', 'Accesibilidad', 'Privacidad', 'Acuerdos legales'];


export default Footer
