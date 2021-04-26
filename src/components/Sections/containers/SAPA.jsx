import React from 'react'
import Back from './Back'
import img from '../../../img/personSapa.png'
import ondas from '../../../img/ondas.svg'
import './SAPA.css'


const SAPA = () => (
    <section className = 'sapaSection'>
        <Back styles = {styles} title = 'SAPA'  subtitle = 'Sistema de Agua Potable y Alcantarillado'  />
        <p className='cont'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, reprehenderit corporis illum inventore distinctio autem quia non repellendus facere aut deleniti recusandae deserunt nihil tenetur quam repudiandae. Repellendus, soluta maiores?
            Itaque dolor cum minus eligendi autem sed commodi fuga. Necessitatibus nihil maiores, explicabo voluptate error ipsa reiciendis rerum commodi rem beatae in officia praesentium at saepe sapiente aliquid quaerat dignissimos.
            Praesentium tenetur, repudiandae a dolores iure unde, odio nobis totam qui error facere voluptates, ex quos atque. Corporis asperiores cum mollitia beatae ipsa. Obcaecati commodi unde aliquam voluptatem officiis inventore.</p>
 
    </section>
)

const styles = {
    container: {
        bottom:       '150px',
        marginBottom: '-150px'
    },
    background: {
        top:          '82px',
        left:         '614px',
        width:        '702px',
        height:       '702px',
        background:   '#B19793',
        borderRadius: '50%',
        '&::after':  {
            content:         '""',
            position:        'absolute',
            backgroundImage: `url(${ondas})`,
            top:             '234px',
            left:            '-1000px',
            width:           '2668px',
            height:          '369px',
            zIndex:          '-1'
        }
    },
    tit: {
        top:       '70px',
        left:      '835px',
        font:      'normal normal bold 213px Roboto',
    },
    sub: {
        top:       '440px',
        left:      '780px',
        font:      'normal normal bold 32px Roboto'
    },
    img: {
        top:              '109px',
        left:             '542px',
        width:            '394px',
        height:           '749px',
        backgroundImage:  `url(${img})`,
    }
}


export default SAPA
