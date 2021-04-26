

import React from 'react'
import Back from './Back'
import img from '../../../img/contratista-arquitecta.png'
import backImg from '../../../img/Ladrillos.svg'
import './ObrasPublicas.css'

const ObrasPublicas = () => (
    <div className = 'obrasSection'>
        <Back styles = {styles} title = 'Obras' subtitle = 'públicas'  />
        <p className='cont'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, reprehenderit corporis illum inventore distinctio autem quia non repellendus facere aut deleniti recusandae deserunt nihil tenetur quam repudiandae. Repellendus, soluta maiores?
            Itaque dolor cum minus eligendi autem sed commodi fuga. Necessitatibus nihil maiores, explicabo voluptate error ipsa reiciendis rerum commodi rem beatae in officia praesentium at saepe sapiente aliquid quaerat dignissimos.
            Praesentium tenetur, repudiandae a dolores iure unde, odio nobis totam qui error facere voluptates, ex quos atque. Corporis asperiores cum mollitia beatae ipsa. Obcaecati commodi unde aliquam voluptatem officiis inventore.</p>

    </div>
)

const styles = {
    container: {
        bottom:       '120px',
        marginBottom: '-120px'
    },
    background: {
        top:              '66px',
        left:             '576px',
        width:            '758px',
        height:           '622px',
        backgroundImage:  `url(${backImg})`
    },
    tit: {
        bottom:    '130px',
        left:      '425px',
        font:      'normal normal bold 241px Roboto'
    },
    sub: {
        top:       '190px',
        left:      '554px',
        font:      'normal normal bold 129px Roboto',
    },
    img: {
        left:             '932px',
        width:            '564px',
        height:           '800px',
        backgroundImage:  `url(${img})`
    }
}


export default ObrasPublicas
