
import React from 'react'

import video from '../../img/herovid.mp4'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className = 'heroSection'>
            <video autoPlay = {true} muted = {true} loop = {true} className = 'fillWidth'>
                <source src={video} type="video/mp4; "/>        
                Tu navegador no soporta este reproductor de vídeo
            </video>
        </section>
    )
}

export default HeroSection
